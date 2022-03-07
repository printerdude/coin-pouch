import React from 'react';
import Menu from './Menu';
import CollectorDetails from './CollectorDetails';

function Home({ searchMenu, setSearchMenu, handleSearch, ethBalance }) {
	return (
		<div>
			<h1>This is the home page</h1>
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