import React from 'react';
import { Sc_Hero } from './styles';
import { heroData } from '../../data/hero';
import background from '../../assets/images/mands.jpg';

const Hero = () => {
  if (heroData.length > 0) {
    return (
      <Sc_Hero background={background}>
        <ul>
          {heroData.map((item, index) => {
            return (
              <li key={index}>
                {item.header ? <h2>{item.header.text}</h2> : undefined}

                {item.copy ? <p>{item.copy}</p> : undefined}
              </li>
            );
          })}
        </ul>
      </Sc_Hero>
    );
  }
};

export default Hero;
