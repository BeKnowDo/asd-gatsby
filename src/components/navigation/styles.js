import styled from 'styled-components'
import { colors } from '../../style-variables'

const Sc_Navigation = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};

  nav {
    display: none;
  }

  a {
    display: inline-block;
    padding: 10px;
  }
`

const Sc_Menu = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
`

const Sc_CloseMenu = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
`

export { Sc_Navigation, Sc_Menu, Sc_CloseMenu }
