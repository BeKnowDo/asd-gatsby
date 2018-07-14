import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import IoCloseRound from 'react-icons/lib/io/close-round'
import TiThMenu from 'react-icons/lib/ti/th-menu'
import { Sc_Navigation, Sc_Menu, Sc_CloseMenu } from './styles'

class Navigation extends PureComponent {
  constructor() {
    super()
    this.state = {
      nav_open: false,
    }
  }

  toggleNavigation = () => {
    this.setState({ nav_open: !this.state.nav_open })
  }
  render() {
    return (
      <Sc_Navigation {...this.state}>
        <Sc_Menu {...this.state} onClick={this.toggleNavigation}>
          <TiThMenu size="28" />
        </Sc_Menu>
        <Sc_CloseMenu {...this.state} onClick={this.toggleNavigation}>
          <IoCloseRound size="28" />
        </Sc_CloseMenu>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Pricing &amp; Sign-up</Link>
            </li>
            <li>
              <Link>Our Mission</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </nav>
      </Sc_Navigation>
    )
  }
}

export default Navigation
