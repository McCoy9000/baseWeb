import '../../css/styles.css'

import React from 'react'
import { FormattedMessage } from 'react-intl';

export class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <h3><FormattedMessage id="resume.title" /></h3>
        <p><FormattedMessage id="resume.body" /></p>
      </div>
    )
  }
}
