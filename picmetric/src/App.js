import React from 'react';
import Login from './components/Login';
import styled from 'styled-components';
import './App.css';

const Header = styled.div`
  display: flex;
  justify-content: center;
  color: blue;
  font-size: 3rem;
  padding: 2%;
  `


function App() {
  
  return (
    <div>
      <Header>Welcome to PicMetric</Header>
      <Login />
    </div>
  )
  
}

export default App;
