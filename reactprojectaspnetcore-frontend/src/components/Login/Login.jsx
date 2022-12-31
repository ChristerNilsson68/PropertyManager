import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../../Context/User.Context';

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { ...formFields };

    axios.post(`http://localhost:5000/customers/${user.email}`).then((resp) => {
      if (formFields.password === resp.data.password) {
        console.log('Success!');

        const loggedInUser = {
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          email: resp.data.email,
        };
        setCurrentUser(loggedInUser);

        resetForm();
        // navigate('/minasidor', { state: { email: user.email } });
      } else {
        alert('E-post och/eller lösenord är fel!');
      }
    });
  };

  const resetForm = () =>
    setFormFields({
      email: '',
      password: '',
    });

  const updateEmail = (event) =>
    setFormFields((values) => ({
      ...values, // formFields
      email: event.target.value,
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
            <label htmlFor="email" className="form-label">
              E-post
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={formFields.email}
              onChange={updateEmail}
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
