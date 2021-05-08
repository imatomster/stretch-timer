import React from 'react';
import './Quizlet.css';
import Card from './Card.js';
import Button from './Button.js';

export default function Quizlet() {

    return (
        <div className="Quizlet">
            <div className="topContainer">
                <Button name="Timer" />
            </div>
            <Card />
            <div className="botContainer">
                <Button name="Next" />
                <Button name="Pause" />
                <Button name="Previous" />
            </div>
        </div>
    )
}
