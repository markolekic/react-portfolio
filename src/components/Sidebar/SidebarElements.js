import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--onyx);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--white);
`;

export const Icon = styled.div`
  position: absolute;
  top: 19px;
  right: 40px;
  font-size: 32px;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: var(--white);
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 24px;
  text-decoration: none;
  list-style: none;
  font-weight: 700;
  font-family: var(--font-primary);
  font-size: 20px;
  margin-top: 50px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: var(--white);
  cursor: pointer;

  &:hover {
    color: var(--opal);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
