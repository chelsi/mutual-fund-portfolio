import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from './components/Search';
import AllocateFund from './components/AllocateFund';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/allocateFund" exact component={AllocateFund} />
        </Switch>
      </Router>
    </div>
  );
}



export default App
