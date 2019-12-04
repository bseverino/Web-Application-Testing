import React from 'react';

function Display(props) {
    return (
        <div>
            <h2>Balls: {props.ballCount}</h2>
            <h2>Strikes: {props.strikeCount}</h2>
        </div>
    );
};

export default Display;