import React from 'react';
import {Header} from './common/header';
import {NavMenu} from './common/navmenu';
import {Body} from './common/body';
import {Footer} from './common/footer';

export class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <NavMenu />
                <Body />
                <Footer />
            </div>
        )
    }
}