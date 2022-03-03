import React from 'react';
import { useEffect } from 'react';

const gasOracleURL = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_API_KEY}`;

function GasOracle({ gas, setGas }) {
	useEffect(() => {
		const url = `${gasOracleURL}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res.result.SafeGasPrice)
				let newSlowGas = res.result.SafeGasPrice;
				let newFastGas = res.result.FastGasPrice;
                let proposeGasPrice = res.result.ProposeGasPrice;
				const newGas = {
					slowGas: newSlowGas,
					fastGas: newFastGas,
					normalGas: proposeGasPrice,
				};
				// const newGas = {
				// 	...gas,
				// 	fastGas: newFastGas,
				// };
				setGas(newGas);
				// setGas(gas);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h2>Gas Oracle</h2>
			<ul>
				<li>Slow: {gas.slowGas} Gwei</li>
				<li>Normal: </li>
				<li>Fast: </li>
			</ul>
		</div>
	);
}

export default GasOracle;
