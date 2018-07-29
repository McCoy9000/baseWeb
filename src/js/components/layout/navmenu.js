import '../../../css/styles.css'

import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../common/button';

export class NavMenu extends React.Component {

  render() {
    return (
      <nav>
        <Link to='/home/portfolio'><Button name="portfolio" type="portfolio" value="portfolio" buttonTitle="portfolio" /></Link>
        <Link to='/home/resume'><Button name="resume" type="resume" value="resume" buttonTitle="resume" /></Link>
        <Link to='/home/blog'><Button name="blog" type="blog" value="blog" buttonTitle="blog" /></Link>
        <Link to='/home/contact'><Button name="contact" type="contact" value="contact" buttonTitle="contact" /></Link>
      </nav>
    )
  }
}
