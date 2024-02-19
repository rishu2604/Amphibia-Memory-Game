import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Images from './components/Images';
import ImgPaths from './components/ImgPaths';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [imagesPaths, setImagesPaths] = useState([])
  
  useEffect(() => {
    shuffleImages();
  }, [clickedCards]);

  function shuffleImages(){
    const imgPathsArray = ImgPaths.map(img => ({ src: img.src, name: img.name }));
    const shuffledArray = imgPathsArray.sort(() => Math.random() - 0.5);
    console.log(shuffledArray);
    setImagesPaths(shuffledArray);
  };

  function handleClick(id){
    if (clickedCards.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    }
    else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
    }
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Images clickHandler={handleClick}  imagesPaths={imagesPaths}/>
    </>
  )
}

export default App;