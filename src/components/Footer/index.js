import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FooterContainer, SocialIconLink, SocialIcons, WebsiteRights } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconLink href='https://github.com/markolekic' target='_blank' arial-label='Github'>
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink href='https://www.facebook.com/markolekic85' target='_blank' arial-label='Facebook'>
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href='https://twitter.com/gleamer001' target='_blank' arial-label='Twitter'>
          <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href='https://www.linkedin.com/in/lekic-marko/' target='_blank' arial-label='Linkedin'>
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
      <WebsiteRights>© {new Date().getFullYear()} Marko Lekic</WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
