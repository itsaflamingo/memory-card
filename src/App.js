import { useState, useEffect } from 'react';
import './App.css';
import Head from './components/Head'
import Main from './components/Main'
import uniqid from "uniqid";
import Beth from '../src/img/beth.webp'
import BirdPerson from '../src/img/bird-person.jpg'
import Devil from '../src/img/devil.png'
import DrWong from '../src/img/DrWong.webp'
import Glootie from '../src/img/glootie.webp'
import Jerry from '../src/img/jerry.jpeg'
import Jessica from '../src/img/jessica.jpg'
import Meseeks from '../src/img/meseeks.jpg'
import Morty from '../src/img/morty.png'
import Pensylvester from '../src/img/Pensylvester.webp'
import PickleRick from '../src/img/pickle-rick.jpg'
import MrPoopyButthole from '../src/img/poopybutt.png'
import Rick from '../src/img/rick.webp'
import Scroopy from '../src/img/scroopy.jpg'
import Snowball from '../src/img/snowball.webp'
import Squanchy from '../src/img/squanchy.webp'
import Summer from '../src/img/summer.webp'
import Tammy from '../src/img/tammy.jpg'
import Toast from '../src/img/toast.webp'
import Unity from '../src/img/unity.webp'


function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); 

  const [PICTURES] = useState([
    { name: 'Beth',              image: Beth,            id: uniqid() },
    { name: 'Rick',              image: Rick,            id: uniqid() },
    { name: 'Mr.Poopy Butthole', image: MrPoopyButthole, id: uniqid() },
    { name: 'Glootie',           image: Glootie,         id: uniqid() },
    { name: 'Dr.Wong',           image: DrWong,          id: uniqid() },
    { name: 'Bird Person',       image: BirdPerson,      id: uniqid() },
    { name: 'Jerry',             image: Jerry,           id: uniqid() },
    { name: 'Jessica',           image: Jessica,         id: uniqid() },
    { name: 'Mr. Meseeks',       image: Meseeks,         id: uniqid() },
    { name: 'Morty',             image: Morty,           id: uniqid() },
    { name: 'Pensylvester',      image: Pensylvester,    id: uniqid() },
    { name: 'Pickle Rick',       image: PickleRick,      id: uniqid() },
    { name: 'Devil',             image: Devil,           id: uniqid() },
    { name: 'Snowball',          image: Snowball,        id: uniqid() },
    { name: 'Summer',            image: Summer,          id: uniqid() },
    { name: 'Tammy',             image: Tammy,           id: uniqid() },
    { name: 'A Piece of Toast',  image: Toast,           id: uniqid() },
    { name: 'Unity',             image: Unity,           id: uniqid() },
    { name: 'Squanchy',          image: Squanchy,        id: uniqid() },
    { name: 'Scroopy Noopers',   image: Scroopy,         id: uniqid() }
  ])

  // randomize cards after each render
  useEffect(() => {
    randomize();
  }, [score, PICTURES])

  // reset score
  useEffect(() => {
    setScore(0)
  }, [bestScore])

  // set new record
  const newBestScore = () => {
    if(score > bestScore) {
     setBestScore(score); 
    }
  }

  const checkIfClicked = (e) => {
    // if array includes id 
    const clicked = document.querySelector('.clicked');
    // if already clicked, reset game
    if(e.target.classList.contains('clicked')) {
      newBestScore();
      clicked.classList.remove('clicked');
    }
    // else, add class clicked & +1 score
    else {
      e.target.classList.add('clicked');
      addScore();
    }  
  }

  const addScore = () => setScore(score + 1);
  

  const randomize = () => {
    for(let i=PICTURES.length-1; i>0; i--) {
      // Math.random * max (will choose between 0 and 20 bc max is 21)
      const j = Math.floor(Math.random() * (i+1));
      [PICTURES[i], PICTURES[j]] = [PICTURES[j], PICTURES[i]];
    }
  }
  
  return (
    <div className="App">
      <Head score={score} bestScore={bestScore} /> 
      <Main pictures={PICTURES} onClick={checkIfClicked} />
    </div>
  );
}

export default App;
