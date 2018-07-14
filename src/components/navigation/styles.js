import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations'
import { colors } from '../../style-variables'

const slideInDownAnimation = keyframes`${slideInDown}`

const Sc_Navigation = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};

  nav {
    animation: 0.3s ${slideInDownAnimation};
    display: ${props => (props.nav_open === true ? 'block' : 'none')};
    padding: 16px 20px 10px;
  }

  a {
    transition: 0.2s transform ease-in;
    display: inline-block;
    font-size: 1.4rem;
    padding: 14px;
    &:hover {
      transform: translateX(10px);
      transition: 0.2s transform ease-out;
    }
  }
`

const Sc_Menu = styled.span`
  display: ${props => (props.nav_open === false ? 'block' : 'none')};
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

const Sc_CloseMenu = styled.span`
  display: ${props => (props.nav_open === true ? 'block' : 'none')};
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export { Sc_Navigation, Sc_Menu, Sc_CloseMenu }
