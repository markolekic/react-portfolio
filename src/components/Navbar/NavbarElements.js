import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: ${({ scrollNav }) => (scrollNav ? "var(--onyx)" : "transparent")};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.2s background-color ease-in-out;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  height: 60px;
  max-width: var(--max-width-container);
  padding: 0 40px;
  width: 100%;
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ scrollNav }) => (scrollNav ? "var(--white)" : "var(--black)")};
  position: absolute;
  top: -2px;
  right: 15px;
  transform: translate(-100%, 60%);
  font-size: 26px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavLogo = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 40px;
  display: block;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
  color: ${({ scrollNav }) => (scrollNav ? "var(--white)" : "var(--black)")};
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
  font-family: var(--font-tertiary);
  font-weight: 700;
  letter-spacing: 1px;
  transition: color 0.3s ease-in-out;

  :hover {
    color: var(--opal);
  }
`;
