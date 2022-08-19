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
      <li onClick={changeTab} className={currTab == 'monitor' ? active:inactive}>Monitor</li>
      <li onClick={changeTab} className={currTab == 'control panel' ? active:inactive}>Control Panel</li>
      <li onClick={changeTab} className={currTab == 'designer' ? active:inactive}>Designer</li>
      <li onClick={changeTab} className={currTab == 'calendar' ? active:inactive}>Calendar</li>
      <li onClick={changeTab} className={currTab == 'create modules' ? active:inactive}>Create Modules</li>
    </ul>);
}

export default Navbar;