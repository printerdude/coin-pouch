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
	const [searchMenu, setSearchMenu] = useState([
		{
			name: 'fvckrender',
			wallet: '0xfded90a3b1348425577688866f798f94d77a0d02',
		},
		{
			name: 'Zeneca_33',
			wallet: '0x886478d3cf9581b624cb35b5446693fc8a58b787',
		},
		{
			name: 'andy8052',
			wallet: '0x90e5aa59a9df2add394df81521dbbed5f3c4a1a3',
		},
		{
			name: 'DeezeFi',
			wallet: '0xc46db2d89327d4c41eb81c43ed5e3dff111f9a8f',
		},
	]);
	return (
		<div>
			<Header />
			<GasOracle gas={gas} setGas={setGas} />
			<Menu searchMenu={searchMenu} setSearchMenu={setSearchMenu} />
			<CollectorDetails ethBalance={ethBalance} setEthBalance={setEthBalance} />
		</div>
	);
}

export default App;
