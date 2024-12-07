import React from 'react';
import styled from 'styled-components';
import { Text } from '@hdevgan17/coding_assignment_13';
import { skills } from '../data';

const SkillsSection = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(180deg, #e6e6fa, #f8f9fa);
  color: #333333;
`;

const Container = styled.div`
  max-width: 75%;
  margin: auto;
  padding: 1rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

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

  p {
    font-size: 1rem;
    color: #666666;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`;

const SkillsCard = styled.div`
  background-color: #4a90e2;
  color: #ffffff;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    padding: 0.75rem 1rem;
  }
`;

const SkillText = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Container>
        <Header>
          <h1>My Skills</h1>
          <p>Technologies and tools I have experience with:</p>
        </Header>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillsCard key={skill}>
              <SkillText>{skill}</SkillText>
            </SkillsCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}
