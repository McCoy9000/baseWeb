import '../../../css/styles.css'

import React from 'react'

export class Image extends React.Component {
  render() {
    return (
      <div className='image' >
        <img className={this.props.className}
          src={this.props.src}
          title={this.props.title}
          alt={this.props.alt} />
      </div>
    )
  }
}

Image.defaultProps = {
  src: '#',
  title: 'Image',
  alt: 'Void image'
}
