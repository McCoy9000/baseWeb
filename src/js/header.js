import '../css/styles.css';
import T from 'i18n-react';
import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title'>
                    {T.translate("header.title", {context: "../resources/text/i18n-lang.json"})}
                </h1>
                <h2 className='subtitle'>
                    header.subtitle
                </h2>
                <div className='imgDiv'>
                    header.imgDiv
                </div>
            </div>
        )
    }
}