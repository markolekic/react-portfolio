import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--onyx);
  height: 65px;
  margin: 0 auto;
`;

export const WebsiteRights = styled.small`
  color: var(--white);
  font-size: 10px;
  font-family: var(--font-primary);
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
