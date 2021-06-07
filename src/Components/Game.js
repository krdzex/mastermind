import React, { useEffect, useState } from 'react';
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
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);
    const onClickChangeColor = (e) => {
        let counterForRow = 0;
        if (e.target.parentNode.className === "row active" && win === false) {
            const isRowFullCopy = isRowFull.slice();
            e.target.style.backgroundColor = activeColor;
            isRowFullCopy[e.target.id] = activeColor;
            setIsRowFull(isRowFullCopy);
            for (var i = 0; i < isRowFullCopy.length; i++) {
                if (isRowFullCopy[i] !== null) {
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

    const [hints3, setHints3] = useState([]);

    const checkClick = (e) => {
        const isRowFullCopy = isRowFull.slice();
        const correctRowCopy = correctRow.slice();
        const hints2 = [0, 0, 0, 0];
        const hints3Copy = hints3.slice();
        if (canChack === true && e.target.parentNode.className === "row active") {
            if (activeRow < 10) {
                setActiveRow(activeRow + 1);
            }
            for (let i = 0; i < 4; i++) {
                if (isRowFullCopy[i] === correctRowCopy[i]) {
                    hints2[i] = 2;
                    isRowFullCopy[i] = undefined;
                    correctRowCopy[i] = null;
                }
            }
            for (let i = 0; i < isRowFullCopy.length; i++) {
                for (var j = 0; j < correctRowCopy.length; j++) {
                    if (isRowFullCopy[i] === correctRowCopy[j]) {
                        hints2[i] = 1;
                        isRowFullCopy[i] = undefined;
                        correctRowCopy[j] = null;
                    }
                }
            }
            hints2.sort();
            hints2.reverse();
            for (let i in hints2) {
                hints3Copy.push(hints2[i]);
            }

            var x = document.getElementsByClassName("squere");
            for (var i = 0; i < hints3Copy.length; i++) {
                if (x[i].parentNode.className === "squers active") {
                    if (hints3Copy[i] === 2) {
                        x[i].className = "squere 2"
                    } else if (hints3Copy[i] === 1) {
                        x[i].className = "squere 1"
                    }
                }
            }
            setIsRowFull(Array(4).fill(null))
            setCanChack(false);
            for (let i in hints2) {
                setHints3(hints3 => [...hints3, hints2[i]]);
            }
            setHints(hints2);

        }
    }
    useEffect(() => {
        if (activeRow === 10) {
            for (let i in hints) {
                if (hints[i] !== 2) {
                    setLose(true);
                    return
                }
            }
        }
        for (let i in hints) {
            if (hints[i] !== 2) {
                return;
            }
        }
        setWin(true);
    }, [hints, activeRow])

    const newGame = () => {
        setHints([0, 0, 0, 0]);
        setActiveRow(0);
        setIsRowFull(Array(4).fill(null));
        setWin(false);
        setLose(false);
        setHints3([])
        var x = document.getElementsByClassName("squere");
        for (let i = 0; i < x.length; i++) {
            x[i].className = "squere"
        }
        var y = document.getElementsByClassName("peg");
        for (let i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "white";
        }
        const correctRowCopy = [];
        for (var i = 0; i < 4; i++) {
            correctRowCopy.push(colorsArray[Math.floor(Math.random() * 4) + 1])
        }
        setCorrectRow(correctRowCopy);
    }
    console.log(correctRow)
    return (
        <div>
            <Colors getActiveColor={getActiveColor} colorsArray={colorsArray} />
            <Board newGame={newGame} activeColor={activeColor} lose={lose} win={win} correctRow={correctRow} canChack={canChack} onClickChangeColor={onClickChangeColor} hints={hints} activeRow={activeRow} checkClick={checkClick} />
        </div>
    );
};

export default Game;