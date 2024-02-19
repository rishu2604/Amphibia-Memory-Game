import React from 'react'
import '../styles/ScoreCard.css';

export default function ScoreCard({score, highScore}) {
    return (
        <div className='main-child'>
            <p>Score: {score}</p>
            <p>Best Score: {highScore}</p>
        </div>
    )
}
