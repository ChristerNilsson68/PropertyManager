import { Link } from 'react-router-dom';
import SiteHeaderIcons from '../SiteHeaderIcons/SiteHeaderIcons';
import './SiteHeader.css';

const SiteHeader = () => {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-primary border-bottom box-shadow">
          <div className="container-fluid">
            <img
              className="col-2 me-3 main-logo"
              src="logo.png"
              alt="Logo for company"
            />
            <h1 className="navbar-brand col-9 text-center text-white main-title">
              Fastighetsservice
            </h1>
            {/* Login/Siteheader komponent goes here */}
            <SiteHeaderIcons />
            {/* <i className="bi bi-person text-white fs-4"></i> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default SiteHeader;
