import React from 'react';
import GasOracle from './GasOracle';

function Header(props) {
    return (
        <div>
            <h1>Coin Pouch</h1>
            <GasOracle></GasOracle>
        </div>
    );
}

export default Header;