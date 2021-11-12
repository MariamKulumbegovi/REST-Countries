import { useState, useEffect } from 'react';
import { TEST_IDS } from '../../../constants/TestIds';
import { Register_Password_Min_Value } from '../../../constants/Validation';

export const ConfirmPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // let number = /[0-9]/;
  // || !number.test(password)
  // || !number.test(password)

  useEffect(() => {
    if (password && password.length < Register_Password_Min_Value) {
      setPasswordError(true);
    } else if (password && password.length >= Register_Password_Min_Value) {
      setPasswordError(false);
    }
  }, [password]);

  useEffect(() => {
    if (confirmPassword != password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }, [confirmPassword]);

  const getClassName = () => {
    let errorClassName = '';
    if (passwordError && password) {
      errorClassName = 'is-danger';
    } else if (!passwordError && password) {
      errorClassName = 'is-success';
    }
    return errorClassName;
  };
  const getClassName2 = () => {
    let errorClassName = '';
    if (confirmPasswordError && confirmPassword) {
      errorClassName = 'is-danger';
    } else if (!confirmPasswordError && confirmPassword) {
      errorClassName = 'is-success';
    }
    return errorClassName;
  };

  return (
    <>
      <p className="control has-icons-left has-icons-right">
        <input
          className={`input ${getClassName()}`}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          required
          onChange={({ target }) => setPassword(target.value)}
          data-testid={TEST_IDS.confirmPassInput.confirmpass}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
        {!passwordError && password && (
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        )}
        {passwordError && password && (
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        )}
      </p>
      <p className="control has-icons-left has-icons-right">
        <input
          className={`input ${getClassName2()}`}
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
        {!confirmPasswordError && confirmPassword && (
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        )}
        {confirmPasswordError && confirmPassword && (
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        )}
      </p>
    </>
  );
};
