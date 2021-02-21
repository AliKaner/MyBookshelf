import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <div className= "Rside">
        <div className = "tableBackGround">
      <table class="table" >
  <thead>
    <tr >
      <th scope="col">Nu</th>
      <th scope="col">Book</th>
      <th scope="col">Page</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Çingene</td>
      <td>78</td>
      <button className="deleteButton">delete</button>     
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>İlyada</td>
      <td>709</td>
      <button className="deleteButton">delete</button>    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Taht Oyunları</td>
      <td>679</td>
      <button className="deleteButton">delete</button>    
    </tr>
  </tbody>
      </table>
  </div>
    </div>
    <div className= "Lside">
      <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"></img>
      <br></br>
      <label className = "sr-only" htmlFor="newItemInput">Add New  </label><a>           </a>
      <input type="text" placeholder = "Books" className = "Bookcont" id = "newItem"></input>
    </div>
    </div>
    
  );
}

export default App;


