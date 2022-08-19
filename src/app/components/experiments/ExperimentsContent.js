import React, { useState } from 'react';

const ExperimentNav = function (props) {
  const [tab, setTab] = [props.tab, props.setTab];
  const navActive = 'exp-nav exp-nav-active';
  const navInactive = 'exp-nav exp-nav-inactive';

  return (
    <ul className="exps-nav">
      <li className={tab == 'Setup' ? navActive : navInactive} onClick={(e) => { setTab(e.target.innerText); }}>Setup</li>
      <li className={tab == 'Deck' ? navActive : navInactive} onClick={(e) => { setTab(e.target.innerText); }}>Deck</li>
      <li className={tab == 'Protocol' ? navActive : navInactive} onClick={(e) => { setTab(e.target.innerText); }}>Protocol</li>
      <li className={tab == 'Overview' ? navActive : navInactive} onClick={(e) => { setTab(e.target.innerText); }}>Overview</li>
    </ul>
  );
}

const SetupTab = function (props) {
  const [temp, setTemp] = useState(0);
  const [co2, setCO2] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const setSetup = props.setSetup;

  function handleSubmit(e) {
    e.preventDefault();
    const yes = confirm(`are you sure you want to setup with:\r\ntemp${temp}\r\nco2:${co2}\r\nhumidity:${humidity}`);
    if (!yes) {
      return;
    }
    setSetup({
      temperature: temp,
      co2: co2,
      humidity: humidity
    })
    setTemp(0);
    setCO2(0);
    setHumidity(0);
  }

  return (
    <form className='setup-form' onSubmit={handleSubmit}>
      <label htmlFor="temp">Temperature (celsius)
        <input type="number" className='setup-item' name="temp" min="-100" max="100" value={temp} onChange={(e) => { setTemp(e.target.value) } } />
      </label>
      <label htmlFor="co2">CO2
        <input type="number" className='setup-item' name="co2" min="-100" max="100" placeholder="0" value={co2} onChange={(e) => { setCO2(e.target.value) } }/>
      </label>
      <label htmlFor="humidity">Humidity %
        <input type="number" className='setup-item' name="humidity" min="0" max="100" placeholder="0" value={humidity} onChange={(e) => {setHumidity(e.target.value)}} />
      </label>
      <input type="submit" value="submit"/>
    </form>
  );
}

const DeckTab = function (props) {
  return (
    <div className="deck-container">
      <div className="bp-container">
        <div className="bp-col1">
          <div className="bp-item"></div>
          <div className="bp-item"></div>
          <div className="bp-item"></div>
        </div>
        <div className="bp-col2">
          <div className="bp-item"></div>
          <div className="bp-item"></div>
          <div className="bp-item"></div>
        </div>
        <div className="bp-col3">
          <div className="bp-item"></div>
          <div className="bp-item"></div>
          <div className="bp-item"></div>
        </div>
        <div className="tip-box-container">
          <div className="tip-box-item"></div>
          <div className="tip-box-item"></div>
        </div>
      </div>
    </div>
  );
}

const ProtocolTab = function (props) {
  return (
    <div className="protocol-container">
      <div className="protocol-steps">
        <div className="prot-start">
          <div className="prot-step">Seed Plates</div>
          <div className="prot-step"> Fixed incubation </div>
          <div className="prot-step"> Media exchange</div>
          <div className="prot-step">Passage cells</div>
        </div>
        <div className="prot-end">
          <div className="prot-step "> Take pictures</div>
          <div className="prot-step "> Harvest cells</div>
        </div>
      </div>
      <div className="protocol-options">
        <div className="prot-opt seed-plates"> Seed Plates </div>
        <div className="prot-opt media-exchange"> Media Exchange</div>
        <div className="prot-opt passage-plates"> Passage plates </div>
        <div className="prot-opt take-pictures"> Take pictures </div>
        <div className="prot-opt harvest-cells"> Harvest cells</div>
        <div className="prot-opt fixed-incubation"> Fixed incubation </div>
      </div>
    </div>
  );
}

const ExperimentsContent = function (props) {
  const [tab, setTab] = useState('Setup');
  const [setup, setSetup] = useState({});
  console.log(setup);
  // "exp-nav exp-nav-active"
  return (
    <div className="main-exp-container">
      <ExperimentNav tab={tab} setTab={setTab} />
      {tab === 'Setup' ? <SetupTab setSetup={setSetup} /> : null}
    </div>

    
  );
}

export { ExperimentsContent };

{/* <div className="main-exp-container">
<ul className="exps-nav">
  <li className="exp-nav exp-nav-active">Protocol</li>
  <li className="exp-nav exp-nav-inactive">Data</li>
</ul>
<div className="protocol-container">
  <div className="protocol-steps">
    <div className="prot-start">
      <div className="prot-step">Seed Plates</div>
      <div className="prot-step"> Fixed incubation </div>
      <div className="prot-step"> Media exchange</div>
      <div className="prot-step">Passage cells</div>
    </div>
    <div className="prot-end">
      <div className="prot-step "> Take pictures</div>
      <div className="prot-step "> Harvest cells</div>
    </div>
  </div>
  <div className="protocol-options">
    <div className="prot-opt seed-plates"> Seed Plates </div>
    <div className="prot-opt media-exchange"> Media Exchange</div>
    <div className="prot-opt passage-plates"> Passage plates </div>
    <div className="prot-opt take-pictures"> Take pictures </div>
    <div className="prot-opt harvest-cells"> Harvest cells</div>
    <div className="prot-opt fixed-incubation"> Fixed incubation </div>
  </div>
</div>
</div> */}