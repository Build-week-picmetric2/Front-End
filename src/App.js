import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import { PrivateRoute } from './helpers/PrivateRoute';
import Navigation from './components/Nagivation';
import Footer from './components/Footer';
import PhotoDetails from './components/PhotoDetails';

import './App.css';



const App = (props) => {
    return (
      <div className = 'app'>
        
          <Navigation />

            <Switch>
              <Route exact path='/' component={Home} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/images/:id' component={PhotoDetails} />
            </Switch>

            <Footer />
          
      </div>
    )
  }
export default App;
