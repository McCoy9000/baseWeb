import React from 'react';

import {Route} from 'react-router-dom';

import {Header} from './header';
import {NavMenu} from './navmenu';
import {Body} from './body';
import {Footer} from './footer';

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavMenu />
                <Body />
                <Footer />
            </div>
        )
    }
}