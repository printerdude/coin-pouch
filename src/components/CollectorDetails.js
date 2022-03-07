import React from 'react';
import { useEffect } from 'react';

const ethBalanceURL = `https://api.etherscan.io/api?module=account&action=balance&address=0x90e5aa59a9df2add394df81521dbbed5f3c4a1a3&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`;

function CollectorDetails({ ethBalance, setEthBalance }) {
	useEffect(() => {
		const url = `${ethBalanceURL}`;

		fetch(url)
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
	}, []);
	return (
		<div>
			<h2>Liquid Eth Balance: {ethBalance}</h2>
		</div>
	);
}

export default CollectorDetails;
