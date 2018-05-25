import '../css/styles.css';
import T from 'i18n-react';
import React from 'react';

export class Image extends React.Component {
  render() {
    return(
      <div className='image'>
        <img src='src' title='image' alt='alt'/>
      </div>
    );
  }
}