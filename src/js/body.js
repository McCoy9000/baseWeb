import '../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {Portfolio} from './portfolio';
import {Resume} from './resume';
import {Contact} from './contact';
import {Blog} from './blog';

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