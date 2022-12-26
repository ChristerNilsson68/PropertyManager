// import { Link, Outlet } from 'react-router-dom';
import { Link, Outlet } from 'react';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import SiteSideBarMenu from '../components/SiteSideBarMenu/SiteSideBarMenu';

const AdminLayout = (props) => {
  return (
    <>
      <SiteHeader />
      <div className="container-fluid">
        <div className="row">
          <SiteSideBarMenu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* {props.children ? props.children : <Outlet />} */}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
