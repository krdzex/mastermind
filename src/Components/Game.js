import React, { useState } from 'react';
import Board from './Board';
import Colors from './Colors';

const Game = () => {
    const [activeColor, setActiveColor] = useState("");
    const getActiveColor = (givenColor) => {
        setActiveColor(givenColor);
    }


    return (
        <div>
            <Colors getActiveColor={getActiveColor} />
            <Board activeColor={activeColor} />
        </div>
    );
};

export default Game;