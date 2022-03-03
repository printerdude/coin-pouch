import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import CollectorDetails from './components/CollectorDetails';


function App() {
  return (
    <div >
      <Header></Header>
      <Menu></Menu>
      <CollectorDetails></CollectorDetails>
    </div>
  );
}

export default App;
