import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuthenticated? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        <NavigationItem link={props.isAuthenticated? '/logout': '/login'}>{props.isAuthenticated? 'Logout': 'Sign in'}</NavigationItem>
    </ul>
);

export default navigationItems;