import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';

import {Route, Link} from 'react-router-dom'

import {Image} from '../common/image';
import {Portfolio} from '../portfolio/portfolio';
import {Layout} from '../layout/layout';

function importAll(r) {
    r.keys().forEach(r);
}
const imagesImport = require.context('images/gallery/', true);

const imageList = imagesImport.keys().map((key) => {
        var imgFileName = key.split('./')[1];
        return <Image key={imgFileName} src={require('images/gallery/' + imgFileName)} />;
    }
);

export class Hero extends React.Component {
    render() {
            return (
                <div>
                    <h1>Hero!</h1>
                    <Link to='/home'><button>Home</button></Link>
                </div>
            )
    }
}