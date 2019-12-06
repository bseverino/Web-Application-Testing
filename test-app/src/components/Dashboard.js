import React from 'react';

function Dashboard(props) {
    return (
        <div>
            <button onClick={() => props.increaseStrike()}>Strike</button>
            <button onClick={() => props.increaseBall()}>Ball</button>
            <button onClick={() => props.increaseFoul()}>Foul</button>
            <button onClick={() => props.resetValues()}>Hit</button>
        </div>
    );
};

export default Dashboard;