import React, { useEffect, useState } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  const [shadowVisible, setShadowVisible] = useState(false);
  const listenScrollEvent = (e) => {
    if (window.scrollY < 60) {
      setShadowVisible(false);
    } else if (window.scrollY > 60) {
      setShadowVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  });

  return (
    <header
      className={
        shadowVisible
          ? `${classes.heading} ${classes.shadow}`
          : `${classes.heading}`
      }
    >
      <h1>TODO LIST</h1>
    </header>
  );
};

export default Header;
