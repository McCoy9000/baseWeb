import React from 'react'

import {Header} from './header'
import {NavMenu} from './navmenu'
import {Body} from './body'
import {Footer} from './footer'

export class Layout extends React.Component {  
  render (props) {
    return (
      <div>
        <Header changeLanguage={props.changeLanguage}/>
        <NavMenu />
        <Body />
        <Footer />
      </div>
    )
  }
}
