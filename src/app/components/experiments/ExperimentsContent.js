import React, { useState } from 'react';

const ExperimentsContent = function (props) {
  return (
    <div className="main-exp-container">
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
    </div>
  );
}

export { ExperimentsContent };