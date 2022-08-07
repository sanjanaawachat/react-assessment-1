import React,{useState} from 'react'
import Functional from'./Functional';
import Class from'./Class';
//  import './style.css';
const Common = () => {
  const [state,setState]=useState(false);
  const [state1,setState1]=useState(false);

  function Visible(){
    setState(!state)  
  }
  function Visible1(){
    setState1(!state1)  
  }
  return (

     <div>
      <h1 className="text1">Styling Using Functional and Class Component</h1>
       <button className="btn1" onClick={Visible}>To see styling in functional component</button>
       {state && <Functional/>}
       <button className="btn2"onClick={Visible1}>To see styling in class component</button>
       {state1 && <Class/>}
     </div>   
 )
}
export default Common;
