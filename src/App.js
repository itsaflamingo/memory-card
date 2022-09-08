import { useState, useEffect } from 'react';
import './App.css';
import Head from './components/Head'
import Main from './components/Main'
import uniqid from "uniqid";

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); 

  const [PICTURES] = useState([
    { name: 'Beth',              url: '/beth.webp',         id: uniqid() },
    { name: 'Rick',              url: '/rick.webp',         id: uniqid() },
    { name: 'Alien',             url: '/alien.png',         id: uniqid() },
    { name: 'Glootie',           url: '/glootie.webp',      id: uniqid() },
    { name: 'Dr.Wong',           url: '/Dr._Wong.webp',     id: uniqid() },
    { name: 'Bird Person',       url: '/bird-person.jpg',   id: uniqid() },
    { name: 'Jerry',             url: '/jerry.jpeg',        id: uniqid() },
    { name: 'Jessica',           url: '/jessica.jpg',       id: uniqid() },
    { name: 'Mr. Meseeks',       url: '/meseeks.jpg',       id: uniqid() },
    { name: 'Morty',             url: '/morty.png',         id: uniqid() },
    { name: 'Pensylvester',      url: '/Pensylvester.webp', id: uniqid() },
    { name: 'Pickle Rick',       url: '/pickle-rick.jpg',   id: uniqid() },
    { name: 'Mr.Poopy Butthole', url: '/poopybutt.png',     id: uniqid() },
    { name: 'Snowball',          url: '/snowball.webp',     id: uniqid() },
    { name: 'Summer',            url: '/summer.webp',       id: uniqid() },
    { name: 'Tammy',             url: '/tammy.jpg',         id: uniqid() },
    { name: 'A Piece of Toast',  url: '/toast.webp',        id: uniqid() },
    { name: 'Unity',             url: '/unity.webp',        id: uniqid() },
    { name: 'Squanchy',          url: '/squanchy.webp',     id: uniqid() },
    { name: 'Scroopy Noopers',   url: '/scroopy.jpg',       id: uniqid() }
  ])

  useEffect(() => {
    // randomize cards after each render
    randomize();
  }, [score, PICTURES])

  useEffect(() => {
    setScore(0)
  }, [bestScore])

  const win = () => {
    console.log('Win!')
  }
  const newBestScore = () => {
    if(score > bestScore) {
     setBestScore(score); 
    }
  }

  const checkIfClicked = (e) => {
    // if array includes id 
    const clicked = document.querySelectorAll('.clicked');

    if(e.target.classList.contains('clicked')) {
      newBestScore();

      clicked.forEach(click => {
        click.classList.remove('clicked')
      })
    }

    PICTURES.forEach((pic) => {
      const id = document.querySelector(`#${pic.id}`)
      if(!id.classList.contains('clicked')) {
        e.target.classList.add('clicked')
        addScore();
        checkIfWin()
      }
    })
  }

  const checkIfWin = () => {
    if(score === PICTURES.length) {
      win();
    }
    else return;
  }

  const addScore = () => {
    setScore(score + 1);
  }

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
      <Main pics={PICTURES} onClick={checkIfClicked} />
    </div>
  );
}

export default App;
