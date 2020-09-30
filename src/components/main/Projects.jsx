import React from 'react'
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';

import marvis from '../../images/marvis.jpg';
import moneytrees from '../../images/money_trees_2.png';
import krate from '../../images/Krate.png';
import activeallies from '../../images/activeallies_white.png';
import projecttracker from '../../images/contractor_project_tracker.png';
import cooloffers from '../../images/cool_offers.png';
import daysoftype from '../../images/days_of_type.png';

import '../styles.css';

const Container = styled.div`
  padding: 48px 100px;
  min-height: 600px;
  background-color: #fff5ee;
`;

const ProjectBox = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 6px;
  border: 1px solid lightskyblue;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 32px;
  margin-right: 32px;
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
`;

const ProjectImg = styled.img`
  border-radius: 6px;
  height: 100%;
  width: auto;
  resize-mode: cover;
  opacity: 0.8;
`;

const ProjectTitle = styled.div`
  background-color: white;
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

const projectInfo = [
  {
    title: 'ActiveAllies',
    description: '24 hour designathon: A web platform that helps adults to ' +
      'understand social justice causes and encourages goal-driven social ' +
      'activism by breaking it down into two categories: learning and taking action. ',
    image: activeallies,
    url: 'https://devpost.com/software/activeallies'
  },
  {
    title: 'Krate',
    description: '3-day UX design contest: An app prototype for a large-item moving service ' +
      'that addresses UX gaps in existing services',
    image: krate,
    url: 'https://docs.google.com/presentation/d/1PcTFkdby1T0UzeSmtVvsTT4XcFUGotu5ixFb0jNYApE/edit?usp=sharing',
  },
  {
    title: 'Money Grows On Trees',
    description: 'A Minecraft inspired VR stock market game backed by ' +
      'historic data from BlackRock’s Aladdin API, engaging and educating ' +
      'players on basic stock transactions',
    image: moneytrees,
    url: 'https://devpost.com/software/money-grows-on-trees'
  },
  {
    title: 'Marvis',
    description: 'A VR visualization of the Marvel API with speech recognition: ' +
      'built with Unity, viewed through Oculus Rift, and Myo gesture control',
    image: marvis,
    url: 'https://devpost.com/software/marvis',
  },
  {
    title: '36 Days of Type',
    description: 'My first participation in this fun daily challenge to creatively ' +
      'interpret the Latin Alphabet.',
    image: daysoftype,
    url: 'https://dribbble.com/shots/14296438-36-Days-Of-Type'
  },
  {
    title: 'Contractor Project Tracker',
    description: 'An idea made during a work hackathon for a new feature we wanted to see: ' +
      'a project tracker that went beyond just financial details',
    image: projecttracker,
    url: '#'
  },
  {
    title: 'Fun Loaders',
    description: 'A work hackathon project to have an interactive loading page, built using ' +
      'ThreeJS and WebGL',
    image: cooloffers,
    url: '#'
  }
];

const Projects = () => (
  <Container id="projects">
    <h3 class="dark-blue-text bold">Assorted work</h3>
    <SubHeader>
      <h5 class="dark-blue-text">
        A collection of things I've worked on, from the past few years to now.
        These projects range from visual designs and prototypes to things I've made
        with other people at hackathons...and are mostly up to date.
      </h5>
    </SubHeader>
    <ProjectsContainer>
      {projectInfo.map(project => (
        <a href={project.url} class="dark-blue-text" target="_blank" rel="noreferrer noopener">
          <ProjectBox>
            {project.url !== '#' &&
              <ExternalLink>
                <FiExternalLink color="#162B4A" size={32} />
              </ExternalLink>
            }
            <ProjectImg src={project.image} />
            <ProjectTitle>
              <h4 class="dark-blue-text center">{project.title}</h4>
              <ProjectDescription>
                <h5>{project.description}</h5>
              </ProjectDescription>
            </ProjectTitle>
          </ProjectBox>
        </a>
      ))}
    </ProjectsContainer>
  </Container>
);

export default Projects;