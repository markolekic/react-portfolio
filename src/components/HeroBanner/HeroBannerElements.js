import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 0 auto;
  max-width: var(--max-width-container);
  padding: 0 40px;
  height: 95vh;

  @media screen and (max-width: 1299px) {
    height: 100%;
    padding-bottom: 45px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const ImgBg = styled.img`
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cultured);
  border-top-right-radius: 5px;
  width: 50%;
  height: 40%;
  left: 0;
  bottom: -1px;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1120px) {
    height: 55%;
  }

  @media screen and (max-width: 900px) {
    height: 80%;
    bottom: -40px;
  }

  @media screen and (max-width: 768px) {
    height: 101%;
    bottom: -1px;
    border-top-right-radius: 0;
  }

  @media screen and (max-width: 652px) {
    width: 100%;
    position: relative;
  }
`;

export const HeroH1 = styled.h1`
  color: var(--black);
  font-size: 40px;
  font-family: var(--font-secondary);
  margin: 15px 15px 0 0;

  @media screen and (max-width: 768px) {
    margin: 0 15px 0 0;
    font-size: 32px;
  }

  @media screen and (max-width: 652px) {
    margin: 15px 0;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: inline-block;
`;
