import React, { useState } from "react";
import { AboutContainer, AboutWrapper, ImageWrapper, Image, AboutContentWrapper, AboutHeading, AboutInfo, AboutBtnWrapper } from "./AboutSectionElements";
import { ButtonLink } from "../ButtonElements";

const AboutSection = ({ id, image, title, information, buttonLabel, resume }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <AboutContainer id={id}>
      <AboutWrapper>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>
        <AboutContentWrapper>
          <AboutHeading>{title}</AboutHeading>
          <AboutInfo>{information}</AboutInfo>
          <AboutBtnWrapper>
            <ButtonLink href={resume} target='_blank' onMouseEnter={onHover} onMouseLeave={onHover} primary='false' dark='true'>
              {buttonLabel}
            </ButtonLink>
          </AboutBtnWrapper>
        </AboutContentWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
