import React from 'react';


function NavItem(props) {
    return (
        <li className={props.mainClassName}>
				<a className="nav-link" href="/">
					<i className={props.iconClassName} ></i>
                    <span>{props.mainText}</span>
                </a>
        </li>
    );
}

export default NavItem;
