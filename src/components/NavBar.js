import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-bar-active" : "nav-bar-not-active"
        }
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/components"
        className={({ isActive }) =>
          isActive ? "nav-bar-active" : "nav-bar-not-active"
        }
      >
        Components
      </NavLink>
    </nav>
  );
};
