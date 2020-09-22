import React from 'react';

function displayMovie(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.name}/>
        </div>
    )
}

export default displayMovie;