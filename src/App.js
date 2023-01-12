import React, { useState } from "react";
import './App.css';

function App() {

  const [calc,setCalc] = useState(0);
  const [result,setResult] = useState(0)

  const ope = ["/","*","+","-"];

  let calcu = (e)  => { 
    setCalc(calc + e)


  return (
    <div className="body">
      <div className="calculator">
        <div className="input">
          <input type="text " />
          {/* {result ? <span>(0)</span> : ""} */}
          {/* {calc || "0"} */}
        </div> 

        <div className="btn1">
          <button className="btnn1" onClick = {calcu("/")}>/</button>
          <button className="btnn1" onClick = {calcu("*")}>*</button>
          <button className="btnn1" onClick = {calcu("-")}>-</button>
          <button className="btnn1" onClick = {calcu("+")}>+</button>
          
        </div>

        <div className="btn2">
          <button className="btnn2">1</button>
          <button className="btnn2">2</button>
          <button className="btnn2">3</button>
          <button className="btnn2">4</button>
          <button className="btnn2">5</button>
          <button className="btnn2">6</button>
          <button className="btnn2">7</button>
          <button className="btnn2">8</button>
          <button className="btnn2">9</button>
          <button className="btnn2">0</button>
        </div>
        <div className="btn2">
          <button className="btnn3">C</button>
          <button className="btnn3">=</button>
          <button className="btnn3">.</button>
          <button className="btnn3">Del</button>
        </div>
      </div>
    </div>
  );
}

}

export default App;