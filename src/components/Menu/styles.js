import styled from 'styled-components';
import button from '../Button/styles';

export const LogoImage = styled.img`
  max-width: 168px;

  @media(max-width: 800px) {
    max-width: 105px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;

  position: fixed;
  top: 0;
  left: 0;
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media(max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(button)`
  @media(max-width: 800px) {
    background-color: var(--primary);
    
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    outline: 0;
    text-align: center;
    border: 0;
    border-radius: 0;
  }
`;
