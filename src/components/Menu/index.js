import React from 'react';

import Logo from '../../assets/img/Logo.png';

import { LogoImage, MenuWrapper, ButtonLink } from './styles';

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="AluraFlix Logo" />
      </a>

      <ButtonLink as="a" href="/" >
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
