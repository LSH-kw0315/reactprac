import './App.css';
import { useState } from 'react';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch, connect} from 'react-redux'

const reducer=(currentState,action)=>{
  if(currentState===undefined){
    return {
      number:1
    };
  }
  const modifiedState={...currentState};
  if(action.type==='plus'){
    modifiedState.number++;
  }
  return modifiedState;
}

const store=createStore(reducer);
const App =()=>{
  const [number,setNumber]=useState(1);
  console.log('root');
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
      <Provider store={store}>
      <Left1></Left1>
      <Right1></Right1>
      </Provider>
      </div>
    </div>
  );
};

const Left1=( )=>
{
  console.log("left1");
  return(
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
};

const Left2=( )=>
{
  console.log("left2");
  return(
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
};

const Left3=( )=>
{
  console.log("left3");
  const number=useSelector((state)=>{
    console.log('selector is called!');
    return state.number;});
  return(
    <div>
      <h1>Left3</h1>
      <p>value : {number}</p>
    </div>
  );
};

const Right1=( )=>{
  console.log("right1");
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
};
const Right2=( )=>{
  console.log("right2");
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
};
const Right3=( )=>{
  console.log("right3");
  const dispatch=useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{
        dispatch({type:"plus"});          
      }}></input>
      <input type="button" value="=" onClick={()=>
      {dispatch({type:"remain"})}}></input>
    </div>
  );
};






export default App;
