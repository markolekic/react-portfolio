import React, { useState } from "react";
import { ButtonScroll } from "../ButtonElements";
import { FaCaretDown } from "react-icons/fa";
import { HeroContainer, ImgWrapper, ImgBg, HeroContent, HeroH1, HeroBtnWrapper } from "./HeroBannerElements";
import Image from "../../images/image.jpg";

const HeroBanner = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <ImgWrapper>
        <ImgBg src={Image} alt='image' />
        <HeroContent>
          <HeroH1>Hi, I'm Marko and I love building beautiful web things</HeroH1>
          <HeroBtnWrapper>
            <ButtonScroll to='about' smooth={true} duration={500} spy={true} exact='true' offset={-65} onMouseEnter={onHover} onMouseLeave={onHover}>
              <FaCaretDown></FaCaretDown>
              about me
            </ButtonScroll>
          </HeroBtnWrapper>
        </HeroContent>
      </ImgWrapper>
    </HeroContainer>
  );
};

export default HeroBanner;
