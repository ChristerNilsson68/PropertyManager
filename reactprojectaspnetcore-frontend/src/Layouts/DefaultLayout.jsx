// import { Link, Outlet } from 'react-router-dom';
import { Link, Outlet } from 'react';
import Login from '../components/Login/Login';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteSideBarMenu from '../components/SiteSideBarMenu/SiteSideBarMenu';

const DefaultLayout = (props) => {
  return (
    <>
      <SiteHeader />

      <div className="container-fluid">
        <div className="row">
          <SiteSideBarMenu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* {props.children ? props.children : <Outlet />} */}

            <Login />
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
