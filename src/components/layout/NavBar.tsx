import React from 'react';
import {Link} from 'react-router-dom'

interface IProps {
    title: string,
    icon: string
}

const NavBar = (props: IProps) => {
    return (
        <nav className='navbar bg-primary'>
            <h1><i className={props.icon}/> {props.title}</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default NavBar;