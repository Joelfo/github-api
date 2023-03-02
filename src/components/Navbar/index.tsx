import { NavLink } from "react-router-dom";
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
      <NavLink to="/" className="nav-logo-text">
          <h4>Github API</h4>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
