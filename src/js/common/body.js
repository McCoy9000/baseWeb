import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {Portfolio} from '../portfolio/portfolio';
import {Resume} from '../resume/resume';
import {Contact} from '../resume/contact';
import {Blog} from '../blog/blog';

export class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Portfolio />
                <Resume />
                <Contact />
                <Blog />
            </div>
        )
    }
}