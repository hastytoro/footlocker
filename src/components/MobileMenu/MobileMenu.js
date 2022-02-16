import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS, WEIGHTS } from '../../constants';
import UnstyledButton from '../UnstyledButton';

// import { QUERIES } from '../../constants';

import Icon from '../Icon';
// import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => (
  <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
    <Backdrop />
    <Content>
      <CloseButton onClick={onDismiss}>
        <Icon id="close" />
      </CloseButton>
      <Filler />
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Filler />
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
    </Content>
  </Wrapper>
);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 500ms;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220deg 5% 40% / 0.8);
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  height: 100%;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 500ms both ease-out;
  animation-delay: 300ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
  font-size: 1.124rem;
  text-transform: uppercase;
  &:first-child {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export default MobileMenu;
