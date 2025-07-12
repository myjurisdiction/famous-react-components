import "./styles.css";

import { Outlet } from "react-router";

import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div className="root-container">
      <NavBar />
      <Outlet />
    </div>
  );
}
