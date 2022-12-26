import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/User.Context';

const SiteHeaderIcons = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logout = () => setCurrentUser(null);

  if (currentUser == null) {
    return (
      <>
        <div className="col text-end align-middle">
          <Link className="text-dark text-decoration-none me-3" to="/checkout/">
            <i className="fs-3 bi bi-basket-fill "></i>
          </Link>
          <Link
            className="text-dark col text-decoration-none me-3"
            to="/login/"
          >
            <i className="fs-3 bi bi-box-arrow-in-right"></i>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link
          class="btn dropdown-toggle"
          to="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Administration
        </Link>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <Link class="dropdown-item" to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link class="dropdown-item" to="/Account/Logout">
              Logga ut
            </Link>
          </li>
        </ul>
      </>
    );
  }
};

export default SiteHeaderIcons;
