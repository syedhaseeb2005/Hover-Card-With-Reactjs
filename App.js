import { useState } from 'react';
import './App.css';

function App() {
  const insertDataCard = [
    {
      maintext: 'Project Made by',
      hoverText: 'Syed Haseeb Ahmed'
    },
    {
      maintext:'What is React?',
      hoverText:'React is Javascript library for bulding user interface'
    },
    {
      maintext:'React allow',
      hoverText:'To create reusable UI component',
    },
    {
      maintext:'Which Language used in React',
      hoverText:'JSX'
    },
    {
      maintext:'What is JSX',
      hoverText:'JSX is a shorthand for Javascript XML '
    },
    {
      maintext:'Who Build ReactJs',
      hoverText:'Jordan Walke'
    }
  ]
  const [cardData , setCarddata] = useState(insertDataCard)

  function MouseOver(index){
    const UpdateData = [...cardData]
    UpdateData[index].maintext = cardData[index].hoverText
    setCarddata(UpdateData)
  }
  function MouseLeave(){
    setCarddata(insertDataCard)
  }

  return (
    <div className='card'>
      {cardData.map((data,index)=>(
        <div className='mycard' onMouseOver={()=>MouseOver(index)} key={index} onMouseLeave={MouseLeave}>
        {data.maintext}
        </div>
    ))}
    </div>
 );
}

export default App;
