import '../../css/styles.css'

import React, { Component } from 'react'

import { Image } from './common/image'



class ImageReel extends Component {
  state = {
    images: require.context('images/gallery/', true).keys()
  }
  render() {
    const { images } = this.state;

    return (
      <div>
        {images.map(image => {
          var imgFileName = image.split('./')[1]
          return (
            <Image key={imgFileName}
              className='portfolioImage'
              title={imgFileName}
              src={`/${require('images/gallery/' + imgFileName)}`}
              alt={imgFileName} />
          )
        })
        }
      </div>
    )
  }
}

export default ImageReel;