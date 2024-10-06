import React, { useState } from "react";
import dicefirst from '../images/image.png'
import Button from "./Button";
import styles from './Landing.module.css'
import { CiPlay1 } from "react-icons/ci";
const Landing =(props)=>{
    
    return (
        <div>
        <div className={styles.first}>
            <div><img src={dicefirst} alt="" /></div>
            <div className={styles.right}><h1>DICE GAME</h1>
            <Button handleClick={props.Clicked} text="Start game" icon= {<CiPlay1 />}/>
            </div>
        </div>
        </div>
    )
}
export default Landing