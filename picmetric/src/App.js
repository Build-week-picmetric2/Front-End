import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';



const App = (props) => {
    return (
      <div className = 'app'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            {/* <Route path='/dashboard' component = {Dashboard} /> */}
          </Switch>
      </div>
    )
  }
export default App;
