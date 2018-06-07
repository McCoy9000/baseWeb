import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {Image} from '../common/image';

function importAll(r) {
    r.keys().forEach(r);
}
const imagesImport = require.context('images/gallery/', true);

const imageList = imagesImport.keys().map((key) => {
        var imgFileName = key.split('./')[1];
        return <Image key={imgFileName} src={require('images/gallery/' + imgFileName)} />;
    }
);

export class Portfolio extends React.Component {
    render() {
            return imageList;
    }
}
