import React from 'react';
import Peg from './Peg';

const Row = (props) => {
    let pegs = [];
    for (let i = 0; i < 4; i++) {
        pegs.push(< Peg key={i} id={i} activeColor={props.activeColor} />);
    }

    let active = "";
    if (props.id === 0) {
        active = "active"
    }
    return (
        <div className={"row " + active} id={props.id}>
            {pegs}
            <div className={"chack"}>
                check
            </div>
        </div>

    );
};

export default Row;