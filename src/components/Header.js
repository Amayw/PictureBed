import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

function Header() {
    return (
        <div>
            <img src={logo} />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;