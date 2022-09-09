This is a memory card game created using React, JavaScript, HTML & CSS. 

Live site URL: itsaflamingo.github.io/memory-card
Link to assignment: https://www.theodinproject.com/lessons/node-path-javascript-memory-card

![My Image](img/README-shot.png)

How the game flows:
- Rules:  
    - pictures will be randomized after every state change
    - game will reset if picture is clicked twice
onClick => 
1. check if picture has been clicked by checking whether classList includes 'clicked'
2. If it does, set score to 0 & determine whether this is a new best score by comparing with the previous best score
3. If it doesn't, add 1 to score and add class of 'clicked' to div

How the game is structured: 

App.js: This is the main page of the code, where I add all components. It's also where I save state, because it is the parent of the two components that both utilize the state (Head & Main), and therefore need access to it. I decided to store the pictures as nested objects within an array, because it would allow me to easily display each object by accessing its url key and the name of the character, by accessing the name key. The array allows me to forgo naming each object, and to use the map function to iterate over each array element and return the picture.

Head.js: This displays the score, which I pass as props from App.js. The score is updated whenever a picture is clicked, and bestScore is updated when a picture is clicked twice. 

Main.js: This displays the picture and name of each object within my pictures array. I pass the props to Card.js using spread syntax for simplicity. Main.js just serves as a container for all the cards. 

Card.js: I map over the pictures array, returning each picture as a div background & displaying the name underneath, and adding the onClick event handler to each parent div.

