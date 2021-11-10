import { useAuthContext } from '../../../components/providers/AuthProvider';
import { EmailInput, PasswordInput } from '../../../components/Elements';
import { login } from '../../../services/AuthService';
import '../../../App.css'
export const LoginForm = () => {
  const { logIn } = useAuthContext();

  const onSubmit = async event => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const loginData = {};

    for (let [key, value] of fd.entries()) {
      loginData[key] = value;
    }

    const result = await login(loginData);
    logIn(result.token);
  };

  return (
    <form className="content mt60" onSubmit={onSubmit}>
      <code>"email": "eve.holt@reqres.in", "password": "cityslicka"</code>
      <div className="field">
        <EmailInput />
      </div>
      <div className="field">
        <PasswordInput />
      </div>
      <p className="control">
        <button className="button is-danger">Login</button>
      </p>
    </form>
  );
};

// export const passValue=() => {
//   PasswordInput.value
// }
