import React, { useState, useEffect } from 'react'
import Numbox from './Numbox';
import styles from './Game.module.css'
import styled from 'styled-components';
import DiceRoll from './DiceRoll';
import dice1 from '../images/dice_1.png'
import dice2 from '../images/dice_2.png'
import dice3 from '../images/dice_3.png'
import dice4 from '../images/dice_4.png'
import dice5 from '../images/dice_5.png'
import dice6 from '../images/dice_6.png'
const Game = () => {
  const [score,setScore]=useState(0);
    const [selectnum,setselectnum]=useState();

    const dicearr=[{
    image:dice1,
    value:1

        },{
    image:dice2,
    value:2

        },{
    image:dice3,
    value:3

        },{
    image:dice4,
    value:4

        },{
    image:dice5,
    value:5

        },{
    image:dice6,
    value:6

        },
        

]
const [randomChoice,setrandomChoice]=useState(dicearr[0]);
const makeRandomChoice=()=>{
  
    const index=Math.floor(Math.random()*dicearr.length);
    setrandomChoice(dicearr[index]);
   
}
useEffect(()=>{
  if(selectnum!=undefined){
   if(selectnum==randomChoice.value){
  setScore((prev)=>prev+randomChoice.value)
    
}else{
  setScore((prev)=>prev-2)
}}
},[randomChoice])


const resetscore=()=>{
  setScore(0);
}





  return (
  <Container>
    <Score className={styles.top}>
      <div>
        <h1>{score}</h1>
      <p>Total Score</p>
      </div>
      
      <Numbox selectnum={selectnum} 
      setselectnum={setselectnum}/>
      
    </Score>
    <DiceRoll randomChoice={randomChoice} makeRandomChoice={makeRandomChoice} resetscore={resetscore}  />
   
  </Container>
  )
}

export default Game
 const Score = styled.div`
  h1 {
    font-size: 100px;
    margin: 0;
    padding: 0;
    margin-left: 20px; /* Left margin for h1 */
    margin-bottom: 5px; /* Reduce space between h1 and p */
  }
  p {
    font-size: 40px;
    margin: 0;
    padding: 0;
    margin-left: 20px; /* Left margin for p */
  }
    padding-top:10px;
`;
const Container = styled.div`
  width: 80%; /* Default for larger screens */
  margin: 0 auto;

  @media (max-width: 768px) {
    /* For tablets and smaller screens */
    width: 100%;
  }

  @media (max-width: 480px) {
    /* For mobile phones */
    padding: 10px;
    text-align: center;
  }
`;