import React from 'react'
import '../styles/header.css';
import ScoreCard from './ScoreCard';

export default function Header({score, highScore}) {
    return (
        <>
            <div className='main-text'>
                <p>Amphibia Memory game</p>
                <ScoreCard score={score} highScore={highScore}/>
            </div>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
            <p>Clicking an image more than once will reset your score!</p>
        </> 
    );
}
