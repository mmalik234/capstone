import React, { useState } from 'react';

const categories = {
    "Category1": ["word1", "word2", "word3"],
    // ... other categories
};

const PlayGame = () => {
    const [selectedCategory, setSelectedCategory] = useState("Category1"); // Example category
    const [score, setScore] = useState(0);

    const handleWordSelection = (word) => {
        if (categories[selectedCategory].includes(word)) {
            setScore(score + 10); // Increase score for correct selection
            // Provide positive feedback
        } else {
            // Provide negative feedback
        }
    };

    return (
        <div>
            <h2>Select Words from {selectedCategory}</h2>
            <div className="game-board">
                {categories[selectedCategory].map((word, index) => (
                    <button key={index} onClick={() => handleWordSelection(word)}>
                        {word}
                    </button>
                ))}
            </div>
            <div>Score: {score}</div>
        </div>
    );
};

export default PlayGame;
