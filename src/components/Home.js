import React from 'react';
import Menu from './Menu';
import CollectorDetails from './CollectorDetails';

function Home({ searchMenu, setSearchMenu, handleSearch, ethBalance }) {
	return (
		<div>
			<h1>How much Eth does this person have?</h1>
			<Menu
				searchMenu={searchMenu}
				setSearchMenu={setSearchMenu}
				handleSearch={handleSearch}
			/>
			<CollectorDetails ethBalance={ethBalance} />
		</div>
	);
}

export default Home;
