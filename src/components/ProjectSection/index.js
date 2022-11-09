import React from "react";
import { Button, ButtonLink } from "../ButtonElements";
import { BsThreeDots } from "react-icons/bs";
import { ProjectContainer, ProjectsWrapper, ProjectInfo, ProjectTitle, ProjectDescription, IconsWrapper, ProjectBtnWrapper, ProjectLink, ProjectImage, Image, Icon, MoreProjects, ToolTip } from "./ProjectElements";
import { projectsData } from "./Data";
import { aboutInfo } from "../AboutSection/Data"

const ProjectsSection = ({ id }) => {
  return (
    <ProjectContainer id={id}>
      {projectsData.map((project) => {
        const { id, title, description, sourceLink, appLink, image, imgStart, imageAlt, color, techStack } = project;
        return (
          <ProjectsWrapper key={id} imgStart={imgStart}>
            <ProjectInfo>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
              <IconsWrapper>
                {techStack.map((icon) => {
                  const { id, tech } = icon;
                  return <Icon key={id}>{tech}</Icon>;
                })}
              </IconsWrapper>
              <ProjectBtnWrapper>
                {sourceLink !== null ? (
                  <ButtonLink primary='false' dark='true' href={sourceLink} target='_blank'>
                    source code
                  </ButtonLink>
                ) : (
                  <Button disabled>private repo</Button>
                )}
              </ProjectBtnWrapper>
            </ProjectInfo>
            <ProjectImage style={{ borderColor: `${color}` }}>
              <ProjectLink href={appLink} target='_blank'>
                <Image src={image} alt={imageAlt} />
              </ProjectLink>
            </ProjectImage>
          </ProjectsWrapper>
        );
      })}
      <ToolTip>
        <MoreProjects href={aboutInfo.resume} target='_blank'>
          <BsThreeDots />
        </MoreProjects>
      </ToolTip>
    </ProjectContainer>
  );
};

export default ProjectsSection;
