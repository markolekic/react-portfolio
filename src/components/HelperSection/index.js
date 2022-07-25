import React from "react";
import { ButtonScroll, ButtonLink } from "../ButtonElements";
import { HelperContainer, HelperWrapper, HelperTitle, HelperLine, HelperBtnWrapper } from "./HelperElements";

const Helper = ({ title, btnText, icon, link, id }) => {
  return (
    <HelperContainer id={id}>
      <HelperWrapper>
        <HelperTitle>{title}</HelperTitle>
        <HelperLine></HelperLine>
        <HelperBtnWrapper>
          {btnText === "projects" ? (
            <ButtonScroll to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-65} primary='false' dark='true'>
              {btnText}
              {icon}
            </ButtonScroll>
          ) : (
            <ButtonLink href={link} primary='false' dark='true'>
              {btnText}
              {icon}
            </ButtonLink>
          )}
        </HelperBtnWrapper>
      </HelperWrapper>
    </HelperContainer>
  );
};

export default Helper;
