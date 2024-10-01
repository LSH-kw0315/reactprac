import './App.css';
import { useState } from 'react';
const App =()=>{
  console.log('root');
  const [number,setNumber]=useState(1);
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
      <Left1 number={number}></Left1>
      <Right1 onIncrease={()=>{
        setNumber(number+1);
      }}></Right1>
      </div>
    </div>
  );
};

const Left1=(props)=>
{
  return(
    <div>
      <h1>Left1</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
};

const Left2=(props)=>
{
  return(
    <div>
      <h1>Left2</h1>
      <Left3 number={props.number}></Left3>
    </div>
  );
};

const Left3=(props)=>
{
  return(
    <div>
      <h1>Left3</h1>
      <p>value:{props.number}</p>
    </div>
  );
};

const Right1=(props)=>{
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onIncrease={()=>
      {props.onIncrease();}}></Right2>
    </div>
  );
};
const Right2=(props)=>{
  return (
    <div>
      <h1>Right2</h1>
      <Right3 onIncrease={()=>{
        props.onIncrease();
      }}></Right3>
    </div>
  );
};
const Right3=(props)=>{
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{
        props.onIncrease();        
      }}></input>
    </div>
  );
};






export default App;
