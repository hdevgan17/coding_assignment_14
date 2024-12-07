import React from 'react';
import { Card, Img, Text } from '@hdevgan17/coding_assignment_13';
import { resources } from '../data';
import styled from 'styled-components';

const ResourcesSection = styled.section`
  background: linear-gradient(180deg, #f0f8ff, #e6e6fa);
  padding: 2rem 0;
  color: #2d2d2d;
  margin-top: 2rem;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 2rem;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #ffffff;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 2rem;
    color: #333333;
  }

  p {
    font-size: 1rem;
    color: #555555;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CustomCard = styled.div`
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  .card-content {
    padding: 1rem;
    text-align: center;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: #333333;
    }

    p {
      font-size: 1rem;
      color: #666666;
      margin-bottom: 1rem;
    }

    button {
      background: #4a90e2;
      color: #ffffff;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #367bb5;
      }
    }
  }
`;

export default function Resources() {
  return (
    <ResourcesSection id="resources">
      <Container>
        <Header>
          <h1>Resources</h1>
          <p>Explore some of the tools and materials I frequently use.</p>
        </Header>
        <ResourcesGrid>
          {resources.map((resource, index) => (
            <CustomCard key={index}>
              <Card
                imageurl={resource.image}
                title={resource.title}
                content={resource.summary}
                buttonText="Learn More"
                onButtonClick={() => window.open(resource.link, '_blank')}
              />
            </CustomCard>
          ))}
        </ResourcesGrid>
      </Container>
    </ResourcesSection>
  );
}
