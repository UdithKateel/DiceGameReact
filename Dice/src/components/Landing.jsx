import React, { useState } from "react";
import dicefirst from '../images/image.png'
import Button from "./Button";
import styles from './Landing.module.css'
import { CiPlay1 } from "react-icons/ci";
import styled from "styled-components";
const Landing =(props)=>{
    
    return (
        <Container>
        <div className={styles.first}>
            <div><img src={dicefirst} alt="" /></div>
            <div className={styles.right}><h1>DICE GAME</h1>
            <Button handleClick={props.Clicked} text="Start game" icon= {<CiPlay1 />}/>
            </div>
        </div>
        </Container>
    )
}
export default Landing
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