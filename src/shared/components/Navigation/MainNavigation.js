import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };

    return (
        <>
            {drawerIsOpen && <Backdrop onClick={toggleDrawer} />}
            {drawerIsOpen && (
                <SideDrawer>
                    <nav className='main0navigation__drawer-nav'>
                        <NavLinks />
                    </nav>
                </SideDrawer>
            )}
            <MainHeader>
                <button
                    className='main-navigation__menu-btn'
                    onClick={toggleDrawer}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    );
};

export default MainNavigation;
