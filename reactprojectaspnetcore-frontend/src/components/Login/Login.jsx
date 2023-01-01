import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../../Context/User.Context';

const Login = () => {
  const { setToken } = useContext(UserContext);

  const [formFields, setFormFields] = useState({
    userName: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { ...formFields };

    axios
      .post('https://localhost:5000/api/auth', user)
      .then((resp) => {
        setToken(resp.data);
        // console.log(resp.data);
        console.log("You're now logged in!");

        resetForm();
        // navigate('/minasidor', { state: { email: user.email } });
      })
      .catch((err) => {
        console.log('Error');
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
      <div className="login-form col-4 offset-4">
        <h1 className="mb-4">Logga in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              E-post
            </label>
            <input
              type="text"
              className="form-control"
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
              id="password"
              value={formFields.password}
              onChange={updatePassword}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-5">
              Logga in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
