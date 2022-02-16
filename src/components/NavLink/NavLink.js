import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};
const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  /* Text slide-up effect */
  overflow: hidden;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-start));
  transition: transform 500ms;

  ${Wrapper}:hover & {
    transition: transform 250ms;
    transform: translateY(var(--translate-end));
  }
`;

const MainText = styled(Text)`
  --translate-start: 0%;
  --translate-end: -100%;
`;

const HoverText = styled(Text)`
  --translate-start: 100%;
  --translate-end: 0%;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
