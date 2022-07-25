import styled from "styled-components";

export const AboutContainer = styled.div`
  max-width: var(--max-width-container);
  margin: 25px auto;

  @media screen and (max-width: 1100px) {
    padding: 0 40px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 992px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const AboutContentWrapper = styled.div`
  width: 40%;
  border-top: 1px solid var(--light-grey);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    width: 100%;
    border-top: 0;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 40px;
  font-family: var(--font-secondary);
  padding: 15px 0;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const AboutInfo = styled.p`
  font-family: var(--font-primary);
  color: var(--dark-grey);
  max-width: 350px;
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
`;

export const AboutBtnWrapper = styled.div`
  display: inline-block;
  margin-top: 15px;
`;
