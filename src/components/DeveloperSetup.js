import React from 'react';
import styled from 'styled-components';
import { Text } from '@hdevgan17/coding_assignment_13';
import { setups } from '../data';

const SetupSection = styled.section`
  background: linear-gradient(135deg, #eceff1, #cfd8dc);
  padding: 3rem 1rem;
  color: #2c3e50;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 75%;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #34495e;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const SetupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const SetupCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SetupInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SetupImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #1e90ff;
`;

const SetupInfo = styled.div`
  padding: 1rem;
  background: #1e90ff;
  color: #ffffff;
  text-align: left;

  &:hover {
    background: #3498db;
  }
`;

const SetupTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f7f7f7;
`;

const SetupDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #f3f3f3;
`;

export default function DeveloperSetup() {
  return (
    <SetupSection id="setup">
      <Container>
        <Header>
          <h1>Developer Setup</h1>
        </Header>
        <SetupGrid>
          {setups.map((setup) => (
            <SetupCard key={setup.image}>
              <SetupInner>
                <SetupImage alt={setup.name} src={setup.image} />
                <SetupInfo>
                  <SetupTitle>{setup.name}</SetupTitle>
                  <SetupDescription>{setup.description}</SetupDescription>
                </SetupInfo>
              </SetupInner>
            </SetupCard>
          ))}
        </SetupGrid>
      </Container>
    </SetupSection>
  );
}
