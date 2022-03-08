import React from 'react';
import { useEffect } from 'react';

const gasOracleURL = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_API_KEY}`;

function GasOracle({ gas, setGas }) {
	useEffect(() => {
		const url = `${gasOracleURL}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let SafeGasPrice = res.result.SafeGasPrice;
				let ProposeGasPrice = res.result.ProposeGasPrice;
				let FastGasPrice = res.result.FastGasPrice;

				const newGas = {
					slowGas: SafeGasPrice,
					normalGas: ProposeGasPrice,
					fastGas: FastGasPrice,
				};

				setGas(newGas);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h2 className='gasOracleTitle'>Gas Oracle</h2>
			<div>
				<h3 className='gasStyle'>Slow: {gas.slowGas} Gwei</h3>
				<h3 className='gasStyle'>Normal: {gas.normalGas} Gwei</h3>
				<h3 className='gasStyle'>Fast: {gas.fastGas} Gwei</h3>
			</div>
		</div>
	);
}

export default GasOracle;
