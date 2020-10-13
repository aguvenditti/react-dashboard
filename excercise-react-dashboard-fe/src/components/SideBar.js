import React from 'react';
import { Link } from 'react-router-dom';

import Divider from './Divider';
import NavItem from './NavItem';


function SideBar(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</Link>

            <Divider className="sidebar-divider my-0" />
            <NavItem mainClassName="nav-item active" link="/" iconClassName="fas fa-fw fa-tachometer-alt" mainText="Dashboard" />
            <Divider className="sidebar-divider" />
            <div className="sidebar-heading">Actions</div>
            <NavItem mainClassName="nav-item" link="/pages" iconClassName="fas fa-fw fa-folder" mainText="Pages" />
            <NavItem mainClassName="nav-item" link="/charts" iconClassName="fas fa-fw fa-chart-area" mainText="Charts" />
            <NavItem mainClassName="nav-item" link="/tables" iconClassName="fas fa-fw fa-table" mainText="Tables" />
            <Divider className="sidebar-divider" />
        </ul>
    );
}

export default SideBar;
