import { useState } from 'react';
import './App.css';
import Head from './components/Head'
import Main from './components/Main'
import uniqid from "uniqid";

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0); 

  const PICTURES = [
    { name: 'Beth',              url: '/beth.webp',         id: uniqid() },
    { name: 'Rick',              url: '/rick.webp',         id: uniqid() },
    { name: 'Alien',             url: '/alien.png',         id: uniqid() },
    { name: 'Glootie',           url: '/glootie.webp',      id: uniqid() },
    { name: 'Dr.Wong',           url: '/Dr._Wong.webp',     id: uniqid() },
    { name: 'Bird Person',       url: '/bird-person.jpg',   id: uniqid() },
    { name: 'Jerry',             url: '/jerry.jpeg',        id: uniqid() },
    { name: 'Jessica',           url: '/jessica.webp',      id: uniqid() },
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
  ]

  const win = () => {
    console.log('Win!')
  }

  const checkIfClicked = (id) => {
    // if array includes id 
    if(PICTURES.includes(id) {
      //remove id from array 
    })
    else {
      //reset array
      //set score to 0
      //check if best score
    }
    //randomize
  }

  const checkIfWin = (score, name) => {
    if(score === PICTURES.length) {
      win();
    }
    
    checkIfClicked(name)
    
    setScore();
  }
  
  return (
    <div className="App">
      <Head /> 
      <Main pics={PICTURES} onClick={checkIfWin} />
    </div>
  );
}

export default App;
