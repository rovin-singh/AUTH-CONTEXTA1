import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import ApiData from "./ApiData";
function Navbar() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Navbar</h1>
      <button onClick={toggleAuth}>Toggle</button>
      {isAuth ? <ApiData /> : null}
    </div>
  );
}

export default Navbar;
