import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, Logo } from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import { linksData, logo } from "./Data";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 5) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='root' onClick={toggleHome}>
          <Logo src={scrollNav ? logo.white : logo.dark} alt='logo' />
        </NavLogo>
        <MobileIcon onClick={toggle} scrollNav={scrollNav}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {linksData.map((item) => {
            const { id, label, link } = item;
            return (
              <NavItem scrollNav={scrollNav} key={id}>
                <NavLinks to={link} smooth={true} duration={500} spy={true} exact='true' offset={-65}>
                  {label}
                </NavLinks>
              </NavItem>
            );
          })}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
