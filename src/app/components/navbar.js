import React, { useState } from 'react';

function Navbar(props) {
  const currTab = props.currTab;
  const active = 'navbar-active';
  const inactive = 'navbar-inactive';

  function changeTab(e) {
    const tabName = e.target.outerText.toLowerCase();
    props.setParentState(tabName);
  }

  return (
    <ul className='navbar'>
      <li onClick={changeTab} className={currTab == 'experiments' ? active:inactive}>Experiments</li>
      <li onClick={changeTab} className={currTab == 'calendar' ? active:inactive}>Calendar</li>
      <li onClick={changeTab} className={currTab == 'mimic' ? active:inactive}>Mimic</li>
      <li onClick={changeTab} className={currTab == 'settings' ? active:inactive}>Settings</li>
      <li onClick={changeTab} className={currTab == 'designer' ? active:inactive}>Designer</li>
    </ul>);
}

export default Navbar;