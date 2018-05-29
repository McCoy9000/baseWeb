import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';


export class Image extends React.Component {

  render(props) {
    return(
      <div className='image'>
        <img src={this.props.src} title={this.props.title} alt={this.props.alt} />
      </div>
    );
  }
}
Image.defaultProps = {
  src: "#",
  title: "Image",
  alt: "Void image"
}