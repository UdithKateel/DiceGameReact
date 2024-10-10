import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react';
const Numbox = () => {
     const Box = styled.div`
     &:hover{cursor:pointer};
     background-color:${(props)=>props.isSelected?"black":"white"};
     color:${(props)=>props.isSelected?"white":"black"};
    border: 2px solid black;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `;
  const Numselect=styled.div`
  display:flex;
  flex-direction:row;
  `
  const Numselectblock=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  `
    const arr =[1,2,3,4,5,6];
  const [selectnum,setselectnum]=useState();
   useEffect(() => { 
    console.log(selectnum);
  }, [selectnum]);
  return (
    <Numselectblock>
    <Numselect>

    {arr.map((value,i)=>(
<Box key={i} isSelected={value==selectnum}  onClick={()=>setselectnum(value)}>{value}</Box>
      ))}
      
      </Numselect>
      <h2>Select Num</h2>
      </Numselectblock>

  )
}


export default Numbox