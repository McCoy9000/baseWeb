import React from 'react'

import { Header } from './header'
import { NavMenu } from './navmenu'
import { Body } from './body'
import { Footer } from './footer'

export class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.i18n = props.i18n
  }

  render() {
    return (
      <div>
        <Header i18n={this.i18n} />
        <NavMenu />
        <Body />
        <Footer />
      </div>
    )
  }
}
