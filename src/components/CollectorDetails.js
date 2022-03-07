import React from 'react';

function CollectorDetails({ ethBalance, setEthBalance }) {
	return (
		<div>
			<h2>Liquid Eth Balance: {ethBalance}</h2>
		</div>
	);
}

export default CollectorDetails;
