import React from 'react'
import styled from 'styled-components'
const Numbox = (props) => {
     const Box = styled.div`
    border: 2px solid black;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `;
  return (
    <Box onClick={props.handleClick}>{props.num}</Box>
  )
}


export default Numbox