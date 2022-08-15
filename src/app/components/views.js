import React, { useState } from 'react';
import Experiments from './experiments.js';

const ExperimentsView = function(props) {
  return (<Experiments/>);
}

const CalendarView = function(props) {
  return (<div>CALENDAR</div>);
}

const MimicView = function(props) {
  return (<div>MIMIC</div>);
}

const SettingsView = function(props) {
  return (<div>SETTINGS</div>);
}

const DesignerView = function (props) {
  return (<div>DESIGNER</div>);
}

export { ExperimentsView, CalendarView, MimicView, SettingsView, DesignerView };