import React, { useState, useEffect } from 'react';

const Scores = () => {
    const [scores, setScores] = useState([]); // This will hold the score data

    useEffect(() => {
        // Fetch scores from your backend or state management and set them
        // For example, using a static array for demonstration:
        setScores([
            { name: 'Player1', score: 200 },
            { name: 'Player2', score: 150 },
            // Add more scores
        ]);
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>{score.name}</td>
                        <td>{score.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Scores;
