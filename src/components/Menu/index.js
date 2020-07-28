import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';

import { LogoImage, MenuWrapper, ButtonLink } from './styles';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="AluraFlix Logo" />
      </Link>

      <ButtonLink as={Link} to="/cadastro/video" >
        Novo vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
