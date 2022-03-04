import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import CollectorDetails from './components/CollectorDetails';
import GasOracle from './components/GasOracle';


function App() {
  const [gas, setGas] = useState({
    slowGas: '',
    normalGas: '',
    fastGas: '',
  });
  const [ethBalance, setEthBalance] = useState();
  return (
		<div>
			<Header></Header>
			<GasOracle gas={gas} setGas={setGas}></GasOracle>
			<Menu></Menu>
			<CollectorDetails
				ethBalance={ethBalance}
				setEthBalance={setEthBalance}></CollectorDetails>
		</div>
	);
}

export default App;
