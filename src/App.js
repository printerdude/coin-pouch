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
	const [searchMenu, setSearchMenu] = useState(
		{
			name: '',
			wallet: '',
		}
	);

	function handleSearch(event) {
		event.preventDefault();
		const ethBalanceURL = `https://api.etherscan.io/api?module=account&action=balance&address=${searchMenu.wallet}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`;

		fetch(ethBalanceURL)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res.result)
				let result = res.result;
				const weiEthBalance = result;
				const newEthBalance = weiEthBalance / 1000000000000000000;
				setEthBalance(newEthBalance);
			})
			.catch((err) => {
				console.error(err);
			});
	}
	return (
		<div id='app'>
			<Header />
			<GasOracle gas={gas} setGas={setGas} />
			<Menu
				searchMenu={searchMenu}
				setSearchMenu={setSearchMenu}
				handleSearch={handleSearch}
			/>
			<CollectorDetails ethBalance={ethBalance} setEthBalance={setEthBalance} />
		</div>
	);
}

export default App;
