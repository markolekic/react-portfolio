import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink } from "./SidebarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarLink to='about' onClick={toggle} offset={-65}>
          About
        </SidebarLink>
        <SidebarLink to='projects' onClick={toggle} offset={-65}>
          Projects
        </SidebarLink>
        <SidebarLink to='contact' onClick={toggle} offset={-65}>
          Contact me
        </SidebarLink>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
