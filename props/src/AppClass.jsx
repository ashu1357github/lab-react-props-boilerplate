import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  

  // code here

render(){
  const imgg = this.props.imageData();

  return (

    <div className="App">
      <div className="header">
        <h1>Kalvium Gallary</h1>
      </div>
      <div className="image-grid">
        {imgg.map((ele) => (
          <img key={ele.id} src={ele.img} alt="" />
        ))}
      </div>
    </div>

  )
}
}