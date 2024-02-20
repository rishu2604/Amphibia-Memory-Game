import React from 'react'
import '../styles/header.css';
import ScoreCard from './ScoreCard';

export default function Header({score, highScore}) {
    return (
        <div className='main'>
            <div className='main-text'>
                <p>Amphibia Memory Game</p>
                <ScoreCard score={score} highScore={highScore}/>
            </div>
            <p className='ptag'>Get points by clicking on an image but don't click on any more than once!</p>
            <p className='ptag'>Clicking an image more than once will reset your score!</p>
        </div> 
    );
}
