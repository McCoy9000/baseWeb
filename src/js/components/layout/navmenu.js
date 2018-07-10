import '../../../css/styles.css'

import React from 'react'
import { Link } from 'react-router-dom'

export class NavMenu extends React.Component {

  render() {
    return (
      <nav>
        <Link to='/home/portfolio'><button>RESUME</button></Link>
        <Link to='/home/resume'><button>RESUME</button></Link>
        <Link to='/home/blog'><button>RESUME</button></Link>
        <Link to='/home/contact'><button>RESUME</button></Link>
      </nav>
    )
  }
}
