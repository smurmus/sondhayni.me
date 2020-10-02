import React from 'react'
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';

import { white, darkBlue, lightBeige } from '../../utils/colors';
import { device } from '../../utils/mediaQuery';
import { projectInfo } from './projectInfo';

const Container = styled.div`
  padding: 48px 24px;
  min-height: 600px;
  background-color: ${lightBeige};
  color: ${darkBlue};

  @media ${device.tablet} {
    padding: 48px;
  }

  @media ${device.laptop} {
    padding: 48px 100px;
    min-height: 600px;
  }
`;

const ProjectBox = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 6px;
  border: 1px solid lightskyblue;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 32px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    background-color: black;
    background-blend-mode: multiply;
    transform: scale(1.02, 1.02);
  }

  &:hover::after {
    opacity: 1;
  }

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.laptop} {
    margin-right: 24px;
  }
`;

const ProjectImg = styled.img`
  border-radius: 6px;
  height: 100%;
  width: auto;
  resize-mode: cover;
  opacity: 0.8;
`;

const ProjectTitle = styled.div`
  background-color: ${white};
  color: ${darkBlue};
  padding: 16px;
  height: 52px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 6px 6px;
  width: 100%;

  ${ProjectBox}:hover & {
    box-shadow: 0px -4px 3px rgba(5, 5, 5, 0.2);
    height: 85%;
  }
`;

const ProjectDescription = styled.div`
  display: none;

  ${ProjectBox}:hover & {
    margin-top: 8px;
    display: flex;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;

const SubHeader = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ExternalLink = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 8px;
  padding-right: 8px;
  opacity: 0.8;
`;


const Projects = () => (
  <Container id="projects">
    <h2>Assorted work</h2>
    <SubHeader>
      <h5>
        A collection of things I've worked on, from the past few years to now.
        These projects range from visual designs and prototypes to things I've made
        with other people at hackathons...and are mostly up to date.
      </h5>
    </SubHeader>
    <ProjectsContainer>
      {projectInfo.map(project => (
        <a
          {...(project.url !== '' ? { href: project.url } : {})}
          class="dark-blue-text"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ProjectBox>
            {project.url !== '' &&
              <ExternalLink>
                <FiExternalLink color={darkBlue} size={32} />
              </ExternalLink>
            }
            <ProjectImg src={project.image} />
            <ProjectTitle>
              <h4 class="center">{project.title}</h4>
              <ProjectDescription>
                <p>{project.description}</p>
              </ProjectDescription>
            </ProjectTitle>
          </ProjectBox>
        </a>
      ))}
    </ProjectsContainer>
  </Container>
);

export default Projects;