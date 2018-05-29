import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {Image} from "https://firebasestorage.googleapis.com/v0/b/web-eli.appspot.com/o/imagenes%2F082424_rid.jpg?alt=media&26token=39a7dc27-6e8c-4b8d-bb6a-8fc7f470d206"
export class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
            <Image src="https://firebasestorage.googleapis.com/v0/b/web-eli.appspot.com/o/imagenes%2F082424_rid.jpg?alt=media%26token=39a7dc27-6e8c-4b8d-bb6a-8fc7f470d206" />
            </div>
        )
    }
}