import '../../../css/styles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Button from '../common/button';

export class NavMenu extends React.Component {

  render() {
    return (
      <nav className="nav">
        <Link className='nav-link' to='/home/portfolio'><FormattedMessage id='navbarPortfolio' /></Link>
        <Link className='nav-link' to='/home/resume'><FormattedMessage id='navbarResume' /></Link>
        <Link className='nav-link' to='/home/blog'><FormattedMessage id='navbarBlog' /></Link>
        <Link className='nav-link' to='/home/contact'><FormattedMessage id='navbarContact' /></Link>
      </nav>
    )
  }
}
