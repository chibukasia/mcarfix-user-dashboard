import React,{useState} from "react";
import AppBarComponent from "./AppBar";
import SideBar from "./SideBar";
import {Outlet} from 'react-router-dom'
import MenuList from "./MenuList";

function Home() {
  const [show, setShow] = useState(true);

  function handleCollapse() {
    setShow((show) => !show);
  }

  let width;
  if (show === true) {
    width = 15;
  } else {
    width = 2;
  }
  return (
    <div>
      <AppBarComponent handleCollapse={handleCollapse} />
      <div className="main">
        <div className="sidebar" style={{ backgroundColor: "#1d4063", width: `${width}%` }}>
          <MenuList />
        </div>
        <div className="content" style={{ backgroundColor: "#e5e5e5" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
