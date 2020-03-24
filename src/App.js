import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Navbar from './components/navbar.component/navbar.component'
import MatchesComponent from './components/matches.component/matches.component';
import BattlesComponent from './components/battles.component/battles.component';

function App() {
  return (
    <Router>
      <Navbar /><br/>
      <Route path='/' exact component={MatchesComponent} />
      <Route path='/matches' exact component={MatchesComponent} />
      <Route path='/battles' component={BattlesComponent} />
    </Router>
  );
}

export default App;
