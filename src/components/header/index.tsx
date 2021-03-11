import React, { memo } from 'react';
import { HeaderContainer, Logo } from './styles';

export const Header = memo(() => {
  return (
      <HeaderContainer>
         <Logo />
      </HeaderContainer>
  );
})
