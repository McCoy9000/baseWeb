import React from 'react';
import {Header} from './header';
import {NavMenu} from './navmenu';
import {Portfolio} from './portfolio';
import {Resume} from './resume';
import {Contact} from './contact';
import {Blog} from './blog';
import {Footer} from './footer';

export class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='header'><Header /></div>
                <div className='navMenu'><NavMenu /></div>
                <div className='portfolio'><Portfolio /></div>
                <div className='resume'><Resume /></div>
                <div className='contact'><Contact /></div>
                <div className='blog'><Blog /></div>
                <div className='footer'><Footer /></div>
            </div>
        )
    }
}