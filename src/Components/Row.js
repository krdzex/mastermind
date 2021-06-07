import React from 'react';
import Peg from './Peg';

const Row = (props) => {
    let pegs = [];
    for (let i = 0; i < 4; i++) {
        pegs.push(< Peg key={i} id={i} activeColor={props.activeColor} onClickChangeColor={props.onClickChangeColor} />);
    }

    let active = "";
    if (props.id === props.activeRow && props.win === false) {
        active = "active"
    }

    return (
        <div className={"row " + active} id={props.id}>
            {pegs}
            <div style={props.canChack === true && props.id === props.activeRow ? { color: "green" } : {}} className={"chack"} onClick={props.checkClick}>
                check
            </div>
            <div className={"squers " + active}>
                {props.hints.map((hint, id) => (
                    <div className="squere" key={id} id={hint}></div>
                ))}
            </div>
        </div >

    );
};

export default Row;