import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: linear-gradient(90deg, #4a90e2, #50c9c3);
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 0.8rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1rem;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #4a90e2;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function Navbar() {
  return (
    <StyledHeader>
      <Container>
        <Logo href="#about">My Portfolio</Logo>
        <Navigation>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#setup">Set up</NavLink>
        </Navigation>
      </Container>
    </StyledHeader>
  );
}

export default Navbar;
