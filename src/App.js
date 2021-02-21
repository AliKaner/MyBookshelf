import React, {useState} from 'react';
import './App.css';

function App() {
    // ctrl + alt + L
    const [bookList, setBookList] = useState([]);
    const [textInput, setTextInput] = useState('');

    const onInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const onAddBookPress = (e) => {
        const tempList = [...bookList];
        tempList.push(textInput);
        setTextInput('');
        setBookList(tempList);
    };

    // bookList.map

    return (
        <div className="App">
            <div className="Rside">
                <div className="tableBackGround">
                    <table className="table">
                        <thead>
                        <tr>
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
            <div className="Lside">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" alt='book'/>
                <br/><br/>
                <label className="sr-only" htmlFor="newItemInput">Add New </label><a> </a>
                <input type="text"
                       placeholder="Books"
                       className="Bookcont"
                       id="newItem"
                       value={textInput}
                       onChange={(e) => onInputChange(e)}/>
                <button onClick={onAddBookPress}>Bas bana</button>
            </div>
        </div>
    );
}

export default App;
