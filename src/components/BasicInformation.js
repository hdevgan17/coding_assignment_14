import React from 'react';
import styled from 'styled-components';
import { Text, Img, Button } from '@hdevgan17/coding_assignment_13';

const Section = styled.section`
  padding: 2rem 0;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  color: #2d3436;
  max-width: 70%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.5rem 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-top: 1.5rem;

  img {
    border-radius: 10px;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export default function BasicInformation() {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Text types="header" bold text="Hi, I'm Harshdeep Devgan." />
          <br />
          <Text
            types="paragraph"
            text="Full Stack Web Development student at RRC Polytech with a passion for technology and creating dynamic web solutions. Proficient in Java, React, Python, and PHP, with a strong focus on building efficient and scalable applications."
          />
          <div style={{ margin: '1rem 0' }}>
            <Button
              primary
              as="a"
              href="#projects"
              text="SEE MY PROJECTS"
              style={{ textDecoration: 'none' }}
            />
          </div>
        </Content>
        <ImageWrapper>
          <Img src="./front.jpg" height="300px" alt="Hero Image" />
        </ImageWrapper>
      </Container>
    </Section>
  );
}
