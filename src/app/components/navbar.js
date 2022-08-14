import React ,{useState} from 'react';

function Navbar(props) {
  const [tab, setTab] = useState(props.tab);
  
  function changeTab(e) {
    const currTab = e.target.outerText.toLowerCase();
    let tabs = props.tab;

    for (const tab in tabs) {
      if (tab == currTab) {
        tabs[tab] = 'navbar-active';
      } else {
        tabs[tab] = 'navbar-inactive';
      }
    }

    console.log(tab);
    props.setParentState(tabs);
    setTab(tabs);
    console.log(tab);
  }

  function realiseTab(e) {
    const text = e.target.outerText;
    console.log(props.currentTab);
    console.log(text);
    if (text == props.currentTab) {
      return 'navbar-active';
    } else {
      return 'navbar-inactive';
    }
  }


  return (
    <ul className='navbar'>
      {console.log(props.tab)}
      <li onClick={changeTab} className={tab.experiments}>Experiments</li>
      <li onClick={changeTab} className={tab.calendar}>Calendar</li>
      <li onClick={changeTab} className={tab.mimic}>Mimic</li>
      <li onClick={changeTab} className={tab.settings}>Settings</li>
      <li onClick={changeTab} className={tab.designer}>Designer</li>
    </ul>);
}

export default Navbar;