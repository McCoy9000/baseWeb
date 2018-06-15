import '../../css/styles.css'
import T from 'i18n-react'
import React from 'react'
import {Image} from '../common/image'
import {List} from '../common/list'

const imagesImport = require.context('images/gallery/', true)

const imageList = imagesImport.keys().map((key) => {
  var imgFileName = key.split('./')[1]

  return (
    <li>
      <Image key={imgFileName} src={`/${require('images/gallery/' + imgFileName)}`} alt={imgFileName} />
    </li>
  )
})

export class Portfolio extends React.Component {
  render () {
    return (
      <List>
        {imageList}
      </List>
    )
  }
}
