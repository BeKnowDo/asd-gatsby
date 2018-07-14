import styled from 'styled-components'
import { colors } from '../../style-variables'

const Sc_Navigation = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};

  nav {
    display: ${props => (props.nav_open === true ? 'block' : 'none')};
    padding: 16px 20px 10px;
  }

  a {
    display: inline-block;
    font-size: 1.4rem;
    padding: 14px;
  }
`

const Sc_Menu = styled.span`
  display: ${props => (props.nav_open === false ? 'block' : 'none')};
  position: absolute;
  top: 24px;
  right: 20px;
  cursor: pointer;
`

const Sc_CloseMenu = styled.span`
  display: ${props => (props.nav_open === true ? 'block' : 'none')};
  position: absolute;
  top: 24px;
  right: 20px;
  cursor: pointer;
`

export { Sc_Navigation, Sc_Menu, Sc_CloseMenu }
