import React from 'react';
import { Link } from 'react-router-dom';


function NavItem(props) {
    return (
        <li className={props.mainClassName}>
				<Link className="nav-link" to={props.link}>
					<i className={props.iconClassName} ></i>
                    <span>{props.mainText}</span>
                </Link>
        </li>
    );
}

export default NavItem;
