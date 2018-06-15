import '../../css/styles.css'
import T from 'i18n-react'

import React from 'react'

export class List extends React.Component {
  render (props) {
    return (
      <div className='list'>
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }
}
