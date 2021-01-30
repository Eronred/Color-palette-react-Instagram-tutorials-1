import React from 'react';
import './Color.css';

const colorData=[
  {
    id:1,
    colorCode:"#d8f3dc"
  },
  {
    id:2,
    colorCode:"#b7e4c7"
  },
  {
    id:3,
    colorCode:"#95d5b2"
  },
  {
    id:4,
    colorCode:"#74c69d"
  },{
    id:5,
    colorCode:"#52b788"
  },
  {
    id:6,
    colorCode:"#40916c"
  },
  {
    id:7,
    colorCode:"#2d6a4f"
  },
  {
    id:8,
    colorCode:"#1b4332"
  },
  {
    id:9,
    colorCode:"#0077B6"
  },
  {
    id:10,
    colorCode:"#0096C7"
  },
]
const ColorItems=colorData.map(color=>{
  return(
    <li key={color.id}>
      <span className="color" style={{backgroundColor: color.colorCode}}></span>
      <span className="color-code">{color.colorCode}</span>
    </li>
  )
})

const ColorCard =()=> {
    return (
      <>
        <ul className="color-palette">
            {ColorItems}
        </ul>
      </>
    );
  }
  export default ColorCard;