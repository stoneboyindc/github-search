import React from 'react';
import Item from './item';

function Result(props) {
    // Build an array of items
    let array = [];

    for (let i = 0; i < props.items.length; i++) {
        array.push(
            <Item key={i} id={i} item={props.items[i]} />
        );
    }


    // Render it
    return (
        <div>
            {array}
        </div>
    );
}

export default Result