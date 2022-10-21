import React, { useState } from "react";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
import Widgets from "./layout/Widgets";
import { mobileCheck } from "./functions/mobileCheck";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [className, setClassName] = useState("hidden");

  const handleClick =  () => {
    if(!mobileCheck()) return;

    setToggleMenu(!toggleMenu);
    const menu = toggleMenu === true ? "absolute" : "hidden";
    setClassName(menu);
  }
  

  return (
      <Container>
        <Sidebar className={className} handleClick={handleClick}/>
        <Content handleClick={handleClick}/>
        <Widgets />
      </Container>
  );
}

export default App;
