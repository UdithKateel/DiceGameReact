import React, { useState } from 'react'
import Numbox from './Numbox';
import styles from './Game.module.css'
import styled from 'styled-components';
const Game = () => {
  const [score,setScore]=useState(0);
  const arr =[1,2,3,4,5,6];
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
`;
const [selectnum,setselectnum]=useState([]);

  console.log(selectnum)

  return (
  <main>
    <Score className={styles.top}>
      <div>
        <h1>{score}</h1>
      <p>Total Score</p>
      </div>
      <div className={styles.top}>{arr.map((value,i)=>(
<Numbox key={i} num={value} onClick={()=>setselectnum(value)}/>
      ))}</div>
    </Score>
  </main>
  )
}

export default Game