import React from 'react';
import { createPortal } from 'react-dom';
import './SideDrawer.css';

const SideDrawer = ({ children }) => {
    const content = <aside className='side-drawer'>{children}</aside>;
    return createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
