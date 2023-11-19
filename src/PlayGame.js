import React, { useState, useEffect } from 'react';

const PlayGame = () => {
    const [categories, setCategories] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("");
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/api/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setSelectedCategory(Object.keys(data)[0]);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

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
            {selectedCategory && (
                <>
                    <h2>Select Words from {selectedCategory}</h2>
                    <div className="game-board">
                        {categories[selectedCategory].map((word, index) => (
                            <button key={index} onClick={() => handleWordSelection(word)}>
                                {word}
                            </button>
                        ))}
                    </div>
                </>
            )}
            <div>Score: {score}</div>
        </div>
    );
};

export default PlayGame;
