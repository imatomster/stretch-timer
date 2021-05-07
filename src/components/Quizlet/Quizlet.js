import React from 'react';
import './Quizlet.css';
import Card from './Card.js';
import Button from './Button.js';

export default function Quizlet() {

    return (
        <div className="Quizlet">
            <Button name="Next" />
            <Card />
            <Button name="Previous" />
        </div>
    )
}
