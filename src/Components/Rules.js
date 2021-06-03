import React, { useState } from 'react';

const Rules = () => {
    const [showRules, setShowRules] = useState(false);
    const rulesShowHide = showRules ? "Hide rules" : "Show rules";

    const showRulesParagraph = () => {
        if (rulesShowHide === "Hide rules") {
            setShowRules(false);
        } else {
            setShowRules(true);
        }
    }
    return (
        <div className='rules'>
            <h1>Mastermind</h1>
            <h3 onClick={showRulesParagraph}> {rulesShowHide} </h3>
            <p style={showRules ? { display: "block" } : { display: "none" }}> Try to guess the pattern, in both order and
            color, within ten turns. After submitting a row,
            a small green squared is show for each circle
            in a correct position and color. A yellow square
            indicates the existence of a correct color in an
              incorrect position. <br />
              More info on <a href={"https://en.wikipedia.org/wiki/Mastermind_(board_game)"}>Wikipedia</a>.
              </p>
        </div >
    );
};

export default Rules;