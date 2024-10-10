import React, { useState, useEffect } from 'react'
import Numbox from './Numbox';
import styles from './Game.module.css'
import styled from 'styled-components';
import DiceRoll from './DiceRoll';
const Game = () => {
  const [score,setScore]=useState(0);

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


  return (
  <main>
    <Score className={styles.top}>
      <div>
        <h1>{score}</h1>
      <p>Total Score</p>
      </div>
      
      <Numbox/>
      
    </Score>
    <DiceRoll/>
    
  </main>
  )
}

export default Game