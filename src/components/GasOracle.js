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
				let SafeGasPrice = res.result.SafeGasPrice;
				let ProposeGasPrice = res.result.ProposeGasPrice;
				let FastGasPrice = res.result.FastGasPrice;

				const newGas = {
					slowGas: SafeGasPrice,
					normalGas: ProposeGasPrice,
					fastGas: FastGasPrice,
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
				<li>Normal: {gas.normalGas} Gwei</li>
				<li>Fast: {gas.fastGas} Gwei</li>
			</ul>
		</div>
	);
}

export default GasOracle;
