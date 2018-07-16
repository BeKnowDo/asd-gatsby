import React, { PureComponent } from 'react'

import Link from 'gatsby-link'
import IoCloseRound from 'react-icons/lib/io/close-round'
import TiThMenu from 'react-icons/lib/ti/th-menu'
import { Sc_Navigation, Sc_Menu, Sc_CloseMenu } from './styles'
import { navigationItems as data } from '../../data/navigation'

class Navigation extends PureComponent {
  constructor() {
    super()
    this.state = {
      nav_open: false,
    }
  }

  toggleNavigation = () => {
    data.length > 0 ? this.setState({ nav_open: !this.state.nav_open }) : null
  }

  buildNavigationItems = data => {
    if (data.length > 0) {
      return (
        <nav>
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.to} title={item.title}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )
    }
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
        {this.buildNavigationItems(data)}
      </Sc_Navigation>
    )
  }
}

export default Navigation
