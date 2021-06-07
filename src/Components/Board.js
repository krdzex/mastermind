import React from 'react';
import Row from './Row';

const Board = (props) => {
    let rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<Row key={i} id={i} win={props.win} canChack={props.canChack} hints={props.hints} allHints={props.allHints} activeColor={props.activeColor} activeRow={props.activeRow} checkClick={props.checkClick} onClickChangeColor={props.onClickChangeColor} />)
    }

    return (
        <div className="board">
            {rows}
            {props.win === true && (<div className="endGame">
                <h3>You won :)</h3>
                <h2>This is solution: </h2>
                {props.correctRow.map((correctPeg, id) => (
                    <div className={"correctPeg " + correctPeg} key={id} id={id}>
                    </div>
                ))}
                <h3 onClick={props.newGame}>Play again?</h3>
            </div>)}
            {props.lose === true && (<div className="endGame">
                <h3>You lost :(</h3>
                <h2>This is solution: </h2>

                {props.correctRow.map((correctPeg, id) => (
                    <div className={"correctPeg " + correctPeg} key={id} id={id}>
                    </div>
                ))}
                <h3 onClick={props.newGame}>Play again?</h3>
            </div>)}

        </div >
    );
};

export default Board;