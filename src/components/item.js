import React from 'react';
import './item.css';

function Item(props) {
    return (
        <div className="item">
            <div>{props.item.name}</div>
            <div>{props.item.issues}</div>
            <div>{props.item.watchers}</div>
            <div>{props.item.stars}</div>
        </div>
    );
}

export default Item