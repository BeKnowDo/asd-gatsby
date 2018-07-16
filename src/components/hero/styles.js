import styled from 'styled-components';
import { colors } from '../../style-variables';

export const Sc_Hero = styled.section`
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-shadow: 0 1px 8px black;
  color: ${colors.white};
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.7rem;
    line-height: 10px;
  }

  background-image: url(${props =>
    props.background ? props.background : 'none'});
`;
