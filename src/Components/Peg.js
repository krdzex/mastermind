import React, { useState } from 'react';

const Peg = (props) => {
    const [isRowFull, setIsRowFull] = useState(Array(4).fill(null));
    const onClickChangeColor = (e) => {
        if (e.target.parentNode.className === "row active") {
            const isRowFullCopy = isRowFull.slice();
            e.target.style.backgroundColor = props.activeColor;
            isRowFullCopy[e.target.id] = props.activeColor;
            setIsRowFull(isRowFullCopy);
            return;
        }
    }
    console.log(isRowFull);
    return (
        <div className="peg" id={props.id} onClick={onClickChangeColor}>

        </div>
    );
};

export default Peg;