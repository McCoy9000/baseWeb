import '../../css/styles.css';
import T from 'i18n-react';
import React from 'react';
import {Link} from 'react-router';

export class NavMenu extends React.Component {
    burgerToggle () {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
    render() {
        return (
            <div className='navMenu'>
                <nav>
                    <Link to='resume'><button>RESUME</button></Link>
                </nav>
            </div>
        )
    }
}
