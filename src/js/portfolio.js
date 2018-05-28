import '../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {Image} from './image';

function importAll(r) {
    r.keys().forEach(r);
}
const imagesImport = require.context('images/gallery/', true);

const imageList = imagesImport.keys().map((key) =>
    <Image src={require('./../../resources/images/gallery/' + (key.split('./')[1]))} />
);

export class Portfolio extends React.Component {
    render() {
            return imageList;

    }
}
