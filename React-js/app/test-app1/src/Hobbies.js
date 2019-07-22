import React, { Component } from 'react';

export default class Hobbies extends Component {
    render() {
        const list = [
            'Sex',
            'Anime',
            'Coding',
            'Eating',
            'cooking to Eat',
            'Researching new technology',
            'Social Media',
        ]
        const liStyle = {fontSize : '1.5em'};
        return (
            <ul>
                {list.map((l, i) => {
                    return <li key={i} style = {liStyle}>{l}</li>
                })}
            </ul>
        );
    }
}  
