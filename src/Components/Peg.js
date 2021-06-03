import React from 'react';

const Peg = (props) => {

    return (
        <div className="peg" id={props.id} onClick={props.onClickChangeColor}>

        </div>
    );
};

export default Peg;