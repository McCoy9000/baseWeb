import '../../css/styles.css'

import React from 'react'

export class Image extends React.Component {
  render (props) {
    return (
      <div className='image'>
        <img src={this.props.src} title={this.props.title} alt={this.props.alt} />
      </div>
    )
  }
}

Image.defaultProps = {
  src: '#',
  title: 'Image',
  alt: 'Void image'
}
