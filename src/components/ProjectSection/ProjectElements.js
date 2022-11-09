import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin: 25px auto 0;
  max-width: var(--max-width-container);
  padding: 0 40px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : null)};

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 15px 0;
  }
`;

export const ProjectInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    width: 100%;
    order: 0;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 40px;
  font-family: var(--font-secondary);
  padding-bottom: 10px;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ProjectDescription = styled.p`
  font-family: var(--font-primary);
  color: var(--dark-grey);
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 15px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const Icon = styled.span`
  font-size: 48px;
  margin-right: 5px;
`;

export const ProjectBtnWrapper = styled.div`
  display: inline-block;
`;

export const ProjectImage = styled.div`
  width: 40%;
  height: max-content;
  border-top: 20px;
  border-left: 20px;
  border-right: 20px;
  border-style: solid;
  border-bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  order: ${({ imgStart }) => (imgStart ? "0" : "1")};
  overflow: hidden;

  @media screen and (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
    order: 1;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ToolTip = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 0;
`;

export const MoreProjects = styled.a`
  cursor: pointer;
  color: var(--black);
  position: relative;
  text-align: center;
  font-size: 26px;

  &:hover {
    &::before {
      content: "Check my resume for more projects";
      width: 200px;
      font-family: var(--font-primary);
      font-weight: 700;
      text-transform: uppercase;
      padding: 8px 20px;
      position: absolute;
      font-size: 12px;
      top: -10px;
      left: 40px;
      border: 1px solid var(--black);
      background-color: transparent;
      color: var(--black);

      @media screen and (max-width: 620px) {
        top: 25px;
        left: -105px;
      }
    }
  }
`;
