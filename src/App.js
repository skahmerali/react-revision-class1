import './App.css';
import { useState }  from "react";
function App() {
  var a = 20
  function increament(){
    a = a+1;
    a=a+1
    console.log(a);
  }
  const [value, setVAlue] =   useState(0)
  function incrementState(){
    setVAlue(function(prev){
      return prev+1;
    })
  }
  return (<><div className="App">
    <div>Normal Variable {a} </div>
    <button onClick={ increament }>Plus</button>
    <br />
    <br />
    <br />
    <div>State Variable {value} </div>
    
      <button onClick={ incrementState }>
        Plus
      </button>
    </div>
</>);
}

export default App;
