import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Home from './components/screens/Home';
import Integration from './components/screens/Integration';
import Pricing from './components/screens/Pricing';
import Contact from './components/screens/Contact';


//
import FrontState from './context/front/frontState';


function App() {

  useEffect(() => {

  });
  return (
    <FrontState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/api-integration" component={Integration} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </FrontState>
  );
}

export default App;