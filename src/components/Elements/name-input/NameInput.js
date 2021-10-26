import { useState, useEffect } from 'react';

export const NameInput = () => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const string = /[a-z]/;

  useEffect(() => {
    if (value && value.length < 2 && string.test(value)) {
      setHasError(true);
    } else if (value && value.length >= 2 && string.test(value)) {
      setHasError(false);
    }
  }, [value]);

  const setClassName = () => {
    let classNameError = '';
    if (hasError && value) {
      classNameError = 'is-danger';
    } else if (!hasError && value) {
      classNameError = 'is-success';
    }
    return classNameError;
  };

  return (
    <>
      <div className="field">
        <p classname="control is-expanded has-icons-left">
          <input
            className={`input ${setClassName()}`}
            type="text"
            placeholder="Name"
            name="name"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </p>
      </div>
    </>
  );
};
