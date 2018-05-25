import React from 'react';
import {Header} from './header';
import {NavMenu} from './navmenu';
import {Body} from './body';
import {Footer} from './footer';

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