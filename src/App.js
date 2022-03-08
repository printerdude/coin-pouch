import React from 'react';
import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import GasOracle from './components/GasOracle';

function App() {
	const [gas, setGas] = useState({
		slowGas: '',
		normalGas: '',
		fastGas: '',
	});
	const [ethBalance, setEthBalance] = useState();
	const [searchMenu, setSearchMenu] = useState({
		name: '',
		wallet: '',
	});

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
		<div id='container'>
			<nav id='navBar'>
				<Link id='homeLink' to='/'>
					<img
						src='https://2163491710-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-McrExXKKJBLJqymbFhO%2Fuploads%2Fgit-blob-e872ec46815c6b27a656435e59e6a3c45435c080%2F1200px-Ethereum-icon-purple.svg.png?alt=media'
						alt='etherium'
					/>
					<h1 id='coinPouchLink'>Coin Pouch</h1>
				</Link>
				<Link to='/gasOracle'>
					<p id='gasOracle'>Gas Oracle</p>
				</Link>
			</nav>
			<main>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								searchMenu={searchMenu}
								setSearchMenu={setSearchMenu}
								handleSearch={handleSearch}
								ethBalance={ethBalance}
							/>
						}
					/>
					<Route
						path='/gasOracle'
						element={<GasOracle gas={gas} setGas={setGas} />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
