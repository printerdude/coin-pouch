import React from 'react';
import { useState } from 'react';


function Menu({ searchMenu, setSearchMenu, handleSearch }) {
	const collectors = [
		{
			name: '',
			wallet: '',
		},
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
	];
	const handleChange = (event) => {
		console.log(searchMenu);
		setSearchMenu({
			...searchMenu,
			name: event.target.value,
			wallet: collectors.find((element) => element.name === event.target.value)
				.wallet,
		});
	};

	return (
		<div>
			<form id='formContainer' onSubmit={handleSearch}>
				<label htmlFor='menuEl'>Search Menu</label>
				<select
					id='menuEl'
					placeholder='Search here'
					onChange={handleChange}
					value={searchMenu.menuEl}>
					{collectors.map((collector) => (
						<option key={collector.name} value={collector.value}>
							{collector.name}
						</option>
					))}
				</select>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default Menu;
