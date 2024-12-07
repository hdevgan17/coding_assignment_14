import React from 'react';
import styled from 'styled-components';
import { Text } from '@hdevgan17/coding_assignment_13';
import { projects } from '../data';

const ProjectsSection = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(180deg, #f8f9fa, #e6f7ff);
  color: #333333;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  padding: 1rem;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #4a4a4a;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled.a`
  display: block;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-top: 3px solid #1e90ff;
`;

const ProjectTech = styled.h2`
  font-size: 0.875rem;
  font-weight: bold;
  color: #1e90ff;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.875rem;
  color: #555555;
  line-height: 1.5;
`;

export default function WorkExperiences() {
  return (
    <ProjectsSection id="work">
      <Container>
        <Header>
          <h1>Some of My Past Projects</h1>
        </Header>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard href={project.link} key={project.image}>
              <ProjectImage alt={project.title} src={project.image} />
              <ProjectInfo>
                <ProjectTech>{project.tech}</ProjectTech>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}
