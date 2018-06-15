import '../../../css/styles.css'

import React from 'react'

export class List extends React.Component {
  render () {
    return (
      <div className='list'>
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }
}
