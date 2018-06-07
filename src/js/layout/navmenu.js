import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class NavMenu extends React.Component {

    render() {
        return (
            <nav>
                <Link to='/home/portfolio'><button>RESUME</button></Link>
                <Link to='/home/resume'><button>RESUME</button></Link>
                <Link to='/home/blog'><button>RESUME</button></Link>
                <Link to='/home/contact'><button>RESUME</button></Link>
            </nav>
        )
    }
}
