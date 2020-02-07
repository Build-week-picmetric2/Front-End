import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import { PrivateRoute } from './helpers/PrivateRoute';
import Navigation from './components/Nagivation';
import Footer from './components/Footer';
import PhotoCard from './components/PhotoCard';

import './App.css';



const App = (props) => {
    return (
      <div className = 'app'>
        
          <Navigation />

            <Switch>
              <Route exact path='/' component={Home} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/dashboard/images/:id' component={PhotoCard}/>
            </Switch>

            <Footer />
          
      </div>
    )
  }
export default App;
