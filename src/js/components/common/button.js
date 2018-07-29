import '../../../css/styles.css'

import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <div id='button'>
        <button className={this.props.className} name={this.props.name} type={this.props.type} value={this.props.value} onClick={this.props.onClick}>{this.props.buttonTitle}</button>
      </div>
    )
  }
}

Button.defaultProps = {
  name: 'button',
  type: 'button',
  value: 'button',
  buttonTitle: 'button'
}
