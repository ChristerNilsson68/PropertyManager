import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/User.Context';
import Login from '../Login/Login';

const SiteHeaderIcons = () => {
  const { token, setToken } = useContext(UserContext);

  const logout = () => setToken(null);

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
          className="dropdown-menu dropdown-menu-right p-4"
          aria-labelledby="dropdownMenuLink"
        >
          <Login />
        </div>
      </>
    );
  } else {
    return (
      <>
        <span
          className="btn dropdown-toggle text-white text-end"
          role="button"
          id="dropdownMenuLoggedIn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Administration
        </span>
        <ul
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuLoggedIn"
        >
          <li>
            <Link className="dropdown-item" to="/">
              Admin
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Logga ut
            </Link>
          </li>
        </ul>
      </>
    );
  }
};

export default SiteHeaderIcons;
