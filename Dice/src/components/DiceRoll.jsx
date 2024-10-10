import React, { useState } from 'react'

import styled from 'styled-components'

const DiceRoll = ({randomChoice,makeRandomChoice ,resetscore}) => {
const [rule,setrule]=useState(false);
const displayrule=()=>{
  setrule((prev)=>!prev)
}

  return (
    <Pack>
    <DiceRollBlock>
        <img src={randomChoice.image} value={randomChoice.value} alt="" onClick={makeRandomChoice} />
         <h3>Click on Dice</h3>
        <button onClick={resetscore} >Reset Score</button>
        <button onClick={displayrule}  >Rules</button>
       
        </DiceRollBlock>
        {rule&&(<RuleBlock>
            <h3>How to Play</h3>
            <p>
                Select Any Number <br />
                Click on dice to Roll <br />
                after clicking if selected number and dice match you get the points on dice <br />
                on mismatch you loose 2 points 
            </p>
        </RuleBlock>)}
        </Pack>
    
  )
}

export default DiceRoll
const DiceRollBlock=styled.div`
img{
width:200px;
height:200px;
margin:0;
padding:0;
}
width:200px;
height:200px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:auto;
margin-top:50px;
margin-bottom :50px;
gap:15px;
`
const RuleBlock = styled.div`
border:none;
background-color:#FBF1F1;
text-align:center;
width:fit-content;
margin:auto;
margin-top:10px;
padding:5px;
height:fit-content;

`
const Pack=styled.div`
display:flex;
flex-direction:column;
gap:20px;
`