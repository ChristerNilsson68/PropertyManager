import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/User.Context';
import Login from '../Login/Login';

const SiteHeaderIcons = () => {
  const { token, setToken } = useContext(UserContext);
  const { setClaim } = useContext(UserContext);

  const logoutUser = () => {
    setToken(null);
    setClaim(null);
  };

  if (token == null) {
    return (
      <>
        <span
          className="btn dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-person text-white fs-2"></i>
        </span>
        <div
          className="dropdown-menu dropdown-menu-end p-4"
          aria-labelledby="dropdownMenuLink"
        >
          <Login />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="dropdown">
          <span
            className="btn dropdown-toggle text-white"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Administration
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="/person">
                Personal
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/" onClick={logoutUser}>
                Logga ut
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
};

export default SiteHeaderIcons;
