import styled from 'styled-components'
import { colors, borders } from '../../style-variables'

export const Sc_Header = styled.header`
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: ${colors.white};
  border-bottom: ${borders.grey};
  box-shadow: 0 0 8px ${colors.grey};
  box-sizing: border-box;

  h1 {
    display: flex;
    font-size: 2.2rem;
    align-items: center;

    > span {
      margin-right: 10px;
    }
    a {
      color: ${colors.black};
      transition: color 0.15s ease-in;
      &:hover {
        transition: color 0.15s ease-in;
        color: ${colors.blue};
      }
    }
  }
  img {
    max-width: 100%;
    width: 36px;
  }
`
