import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton';
import MobileMenu from '../MobileMenu';
import NavLink from '../NavLink/NavLink';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <RightSide>
          <Logo />
        </RightSide>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu" onClick={() => setMobileMenu(true)} />
          </UnstyledButton>
        </MobileNav>
        <LeftSide />
      </MainHeader>
      <MobileMenu isOpen={mobileMenu} onDismiss={() => setMobileMenu(false)} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  border-top: 4px solid ${COLORS.gray[900]};

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
    justify-content: space-between;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

export default Header;
