import './App.css';
import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here
const imgg = props.imageData();
  return (
    <div className="App">
      <div className="header">
        <h1>Functional Component</h1>
      </div>
      <div className="image-grid">
        {imgg.map((ele) => (
          <img key={ele.id} src={ele.img} alt="" />
        ))}
      </div>
    </div>
  )
}


export default App;