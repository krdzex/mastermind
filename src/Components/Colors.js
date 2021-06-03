import React, { useState } from 'react';

const Colors = (props) => {

    const [activeColor, setActiveColor] = useState("")

    const addActiveColor = (color) => {
        setActiveColor(color);
        props.getActiveColor(color);
    }

    return (
        <div className="colors">
            {props.colorsArray.map((color, id) => (
                <div className={activeColor === color ? "colorHolder " + color + " active" : "colorHolder " + color} key={id} onClick={() => addActiveColor(color)}>
                </div>
            ))
            }
        </div >
    );
};

export default Colors;