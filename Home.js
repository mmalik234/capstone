import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Jeopardy!</h1>
            <p>Welcome to our online Jeopardy game! Ready to test your knowledge?</p>
            <Link to="/play">Start Game</Link>
            {/* You can add more links or information here */}
            <div>
                <Link to="/scores">View Scores</Link>
            </div>
            <div>
                <Link to="/about">About Us</Link>
            </div>
        </div>
    );
};

export default Home;