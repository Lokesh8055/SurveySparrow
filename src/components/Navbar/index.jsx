import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import NavbarWrapper from "./Navbar.style";

const links = [
  {
    url: "/",
    text: "Products",
  },
  {
    url: "/",
    text: "Features",
  },
  {
    url: "/",
    text: "Use Cases",
  },
  {
    url: "/",
    text: "Pricing",
  },
  {
    url: "/",
    text: "login",
  },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="nav-logo">Maxeon</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link, i) => {
              const { url, text } = link;
              return (
                <li key={i}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
