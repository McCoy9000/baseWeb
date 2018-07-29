import '../../../css/styles.css'

import React from 'react'
import { FormattedMessage } from 'react-intl'

import Image from './image'

export class Article extends React.Component {
  render() {
    return (
      <div className='article'>
        <Image className='articleImage' />
        <h3><FormatteMessage id={this.props.articleTitle} /></h3>
        <h2><FormattedMessage id={this.props.articleSubtitle} /></h2>
        <p><FormattedMessage id={this.props.articleBody} /></p>
      </div>
    )
  }
}
