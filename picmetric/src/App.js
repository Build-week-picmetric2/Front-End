import React from 'react';

import './App.css';



export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }
  }
  render() {
    
    return (
    <div className = 'app'>
      <BrowserRouter>
        <Switch>
          <Route 
          exact 
          path = {'/'}
          render={props => (
            <Home {...props} logginInStatus = {this.state.loggedInStatus/>
          <Route exact path = {'/dashboard'} component = {Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
  
  
}

export default App;

        