import React from 'react'
import Link from 'gatsby-link'
import { Sc_Header } from './styles'
import Navigation from '../navigation'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Sc_Header>
      <h1>
        <span>
          <img src={logo} alt="Logo" />
        </span>
        <Link to="/">ASD Applied</Link>
      </h1>
      <Navigation />
    </Sc_Header>
  )
}

export default Header
