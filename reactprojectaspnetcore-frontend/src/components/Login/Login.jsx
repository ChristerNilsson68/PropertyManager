import { useState, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../../Context/User.Context';

const Login = () => {
  const { setToken } = useContext(UserContext);

  const [formFields, setFormFields] = useState({
    userName: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { ...formFields };

    axios.post('https://localhost:5000/api/auth', user).then((resp) => {
      const response = resp.data.token;
      setToken(response);

      resetForm();
    });
  };

  const resetForm = () =>
    setFormFields({
      userName: '',
      password: '',
    });

  const updateUserName = (event) =>
    setFormFields((values) => ({
      ...values, // formFields
      userName: event.target.value,
    }));

  const updatePassword = (event) =>
    setFormFields((values) => ({
      ...values, // formFields
      password: event.target.value,
    }));

  return (
    <>
      <h1 className="mb-3">Logga in</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            E-post
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="namn@företag.com"
            id="userName"
            value={formFields.userName}
            onChange={updateUserName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Lösenord
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Ditt lösenord"
            id="password"
            value={formFields.password}
            onChange={updatePassword}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mb-2">
            Logga in
          </button>
        </div>
      </form>
    </>
  );
};

// const GetClaims = () => {
//   const { token } = useContext(UserContext);

//   const payload = token.split('.')[1];
//   const dataToken = JSON.parse(atob(payload));
//   const claims = dataToken.role;
//   console.log(claims);
// };

export default Login;
