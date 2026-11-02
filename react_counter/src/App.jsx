import {useState} from 'react';


function App(){
  const [count, setCount] = useState(0);

const Addvalue = ()=>{
  if(count < 20){
    setCount(count + 1);
  }else{
    alert("value is not allowed");
  }
}

const Decreasevalue = ()=>{
  if(count >0){
    setCount(count - 1);
  }else{
    alert("negative value is not allowed");
  }
}

  return(
    <div>
      <h1>hello guys this my counter</h1>
      
      <h2>count: {count}</h2>
      <button onClick={Addvalue}>Add value</button>
      <button onClick={Decreasevalue}>sub value</button>
    </div>
  )
}

export default App;