import React, { useState } from 'react';
import Board from './Board';
import Colors from './Colors';

const Game = () => {
    const [activeColor, setActiveColor] = useState("");
    const getActiveColor = (givenColor) => {
        setActiveColor(givenColor);
    }

    const colorsArray = ["red", "green", "blue", "yellow", "purple"];
    const [correctRow, setCorrectRow] = useState([])
    const [hints, setHints] = useState([0, 0, 0, 0])
    const [activeRow, setActiveRow] = useState(0);
    const [isRowFull, setIsRowFull] = useState(Array(4).fill(null));
    const [canChack, setCanChack] = useState(false);
    const onClickChangeColor = (e) => {
        let counterForRow = 0;
        if (e.target.parentNode.className === "row active") {
            const isRowFullCopy = isRowFull.slice();
            e.target.style.backgroundColor = activeColor;
            isRowFullCopy[e.target.id] = activeColor;
            setIsRowFull(isRowFullCopy);
            for (var i = 0; i < isRowFullCopy.length; i++) {
                if (isRowFullCopy[i] !== null) {
                    console.log(isRowFullCopy[i])
                    counterForRow++;
                }
            }
            if (counterForRow === 4) {
                setCanChack(true);
            } else {
                setCanChack(false);
            }
        }
    }


    window.onload = function () {
        const correctRowCopy = [];
        for (var i = 0; i < 4; i++) {
            correctRowCopy.push(colorsArray[Math.floor(Math.random() * 4) + 1])
        }
        setCorrectRow(correctRowCopy);
    }


    const checkClick = (e) => {
        const isRowFullCopy = isRowFull.slice();
        const correctRowCopy = correctRow.slice();
        const hints2 = [0, 0, 0, 0];
        if (canChack === true) {
            if (e.target.parentNode.className === "row active") {
                if (activeRow < 9) {
                    setActiveRow(activeRow + 1);
                }
                for (let i = 0; i < 4; i++) {
                    if (isRowFullCopy[i] === correctRowCopy[i]) {
                        hints2[i] = 2;
                        isRowFullCopy[i] = undefined;
                        correctRowCopy[i] = null;
                    }
                }
                console.log(isRowFullCopy.length)
                for (let i = 0; i < isRowFullCopy.length; i++) {
                    for (var j = 0; j < correctRowCopy.length; j++) {
                        if (isRowFullCopy[i] === correctRowCopy[j]) {
                            hints2[i] = 1;
                            isRowFullCopy[i] = undefined;
                            correctRowCopy[i] = null;
                        }
                    }
                }
                setIsRowFull(Array(4).fill(null))
                setCanChack(false);
            }
        }
        setHints(hints2);
        console.log(isRowFullCopy, correctRowCopy, hints2)
    }

    return (
        <div>
            <Colors getActiveColor={getActiveColor} colorsArray={colorsArray} />
            <Board activeColor={activeColor} canChack={canChack} onClickChangeColor={onClickChangeColor} activeRow={activeRow} checkClick={checkClick} />
            {correctRow}
        </div>
    );
};

export default Game;