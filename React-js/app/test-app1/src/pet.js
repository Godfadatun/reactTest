import React, { Component } from 'react';
import './pet.css';
import Hobbies from './Hobbies';

export default class pet extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Sup World</h2>
                <img src = "https://previews.123rf.com/images/na2xa/na2xa1710/na2xa171003729/88132427-a-strict-girl-with-glasses-looks-at-the-camera-and-shows-a-coin-money-electronic-money-crypto-curren.jpg"
                
                     alt = "Girl with coin"
                />
                <h5 style = {{
                    fontSize: '2em', 
                    margin:"2px"
                    }}
                >Hobbis: </h5>
                <Hobbies />
            </div>
        );
    }
}  
