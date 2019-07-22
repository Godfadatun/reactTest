import React, { Component } from 'react';

class Food extends Component {
    render() {
       const {name, img, instructions, details} = this.props;
       const ingridents = this.props.ingridents.map((ing, i) => {
        return <li key={i}>{ing}</li>
    })
       
        return (
            <div>
                <h1> Yo!!! {name} </h1>
                <img src={img} alt={name} />
                <ul>
                    {ingridents}
                </ul>
                <p>{instructions}</p>
                <p>{details[0].name}</p>
            </div>
        )
    }
}

export default Food;