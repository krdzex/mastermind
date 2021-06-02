import React from 'react';
import Row from './Row';

const Board = (props) => {
    let rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<Row key={i} id={i} activeColor={props.activeColor} />)
    }
    return (
        <div className="board">
            {rows}
        </div>
    );
};

export default Board;