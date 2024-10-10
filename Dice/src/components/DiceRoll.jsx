import React, { useState } from 'react'
import dice1 from '../images/dice_1.png'
import dice2 from '../images/dice_2.png'
import dice3 from '../images/dice_3.png'
import dice4 from '../images/dice_4.png'
import dice5 from '../images/dice_5.png'
import dice6 from '../images/dice_6.png'
const dicearr=[{
    image:{dice1},
    value:1

        },{
    image:{dice2},
    value:2

        },{
    image:{dice3},
    value:3

        },{
    image:{dice4},
    value:4

        },{
    image:{dice5},
    value:5

        },{
    image:{dice6},
    value:6

        },
        

]
const [randomChoice,setrandomChoice]=useState();
const makeRandomChoice=()=>{
    const index=Math.floor(Math.random()*dicearr.length());
    setrandomChoice(dicearr[index]);
}
const DiceRoll = () => {
  return (
    <div>
        
        
    </div>
  )
}

export default DiceRoll