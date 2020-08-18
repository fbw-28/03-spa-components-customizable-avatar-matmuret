import "./Style.css"
import React from 'react';
import Avatar from "./Avatar"

function App() {
  const data=[
    { size:"s", type:"squared"},
    { size:"s", type:"rounded"},
    { size:"s", type:"circle"},
    { size:"m", type:"squared"},
    { size:"m", type:"rounded"},
    { size:"m", type:"circle"},
    { size:"l", type:"squared"},
    { size:"l", type:"rounded"},
    { size:"l", type:"circle"},
    { size:"xl", type:"squared"},
    { size:"xl", type:"rounded"},
    { size:"xl", type:"circle"},
  ]
  return (
    <div className="App">
      <h1>My React App</h1>
      <div style={{"display":"flex","flexFlow":"wrap"}}>
      {/* <Avatar size="s" type="circle"/>
      <Avatar size="l" type="rounded"/>
      <Avatar/> */}
      {data.map(item=>{
          return(<Avatar size={item.size} type={item.type}/>)
        })
      }
      </div>
    </div>
  );
}


export default App;