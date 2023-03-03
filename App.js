import React, { useState } from 'react';/*hooks concept used to avoid class using import first*/ 
import './App.css';

function App(props) {
  const[result,setResult]=useState(''); /*hooks concept used here 1st argument is initial value,2nd argument used to update  */

  const clickMeth =(pro)=>{
    setResult(result.concat(pro.target.name));
}

const eraseAll=()=>{
  setResult("");
}

const backSpace =()=>{
setResult(result.slice(0,-1));/*slice method used to remove last digit in our program */
}

const total=()=>{
  
  try{
    setResult(eval(result).toString()); /*eval method used to evaluates the expression & executes the statements*/
  } 
  catch(mistakes){
    setResult('Error')
  }
}


  return (
   <>
   <div className="container">
    <form>
      <input type="text" value={result} />
    </form>
   
<div className='keyboard'> 
{/* ctl+alt used to select multiple tags   */}
  <button onClick={eraseAll} id='eraseAll'>Clear</button>
  <button onClick={backSpace} id='backspace'>C</button>
  <button name='/' onClick={clickMeth}>&divide;</button>
  <button name='7' onClick={clickMeth}>7</button>
  <button name='8' onClick={clickMeth}>8</button>
  <button name='9' onClick={clickMeth}>9</button>
  <button name='*' onClick={clickMeth}>&times;</button>
  <button name='4' onClick={clickMeth}>4</button>
  <button name='5' onClick={clickMeth}>5</button>
  <button name='6' onClick={clickMeth}>6</button>
  <button name='-' onClick={clickMeth}>&ndash;</button>
  <button name='1' onClick={clickMeth}>1</button>
  <button name='2' onClick={clickMeth}>2</button>
  <button name='3' onClick={clickMeth}>3</button>
  <button name='+' onClick={clickMeth}>+</button>
  <button name='0' onClick={clickMeth}>0</button>
  <button name='.' onClick={clickMeth}>.</button>
  <button onClick={total} id='result'>=</button>
</div>
</div>
   </>
  );
}

export default App;