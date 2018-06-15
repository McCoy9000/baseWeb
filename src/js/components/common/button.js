import '../../css/styles.css'

import React from 'react'

import { FormattedMessage } from 'react-intl';

export class Button extends React.Component {
  render (props) {
    return (
      <div id='button'>
        <button name={this.props.name} type={this.props.type} value={this.props.value}>{this.props.buttonTitle}</button>
      </div>
    )
  }
}

Button.defaultProps = {
  name: 'button',
  type: 'button',
  value: 'button'
}
