import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, onClose }) => {
    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <button onClick={onClose}>X</button>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/play">Play Game</Link></li>
                <li><Link to="/scores">Scores</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {/* Add other menu items here */}
            </ul>
        </div>
    );
};

export default Menu;