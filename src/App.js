import React, {useState} from 'react';
import './App.css';

function App() {
    // ctrl + alt + L
    const [bookList, setBookList] = useState([]);
    const [textInput, setTextInput] = useState('');

    const onInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const onAddBookPress = () => {
        const tempList = [...bookList];
        tempList.push(textInput);
        setTextInput('');
        setBookList(tempList);
    };

    const onDeleteBookPress = (book) => {
        const templistrDelete = [...bookList];
        const deletecoook = templistrDelete.filter((item) =>item!==book );
       setBookList(deletecoook);



    }

    // bookList.map

    return (
        <div className="App">
            <div className="Rside">
                <div className="tableBackGround">
                    <div className="table-row">
                        <div className="book-header-background">
                            <h1 className="books-header">Books</h1>
                            <div className="seperater"></div>
                            { bookList.map((book) =>
                                <div className = "newBook">
                                    <div  className="book">
                                        {book}
                                    </div>
                                    <div className = "bookButton">
                                        <button className ="delete-button"
                                                onClick ={()=>onDeleteBookPress(book)}>Delete</button>

                                    </div>
                                    <div className = "bookSeperater"></div>
                                </div>)
                            }
                        </div>
                    </div>
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
                <button onClick={onAddBookPress}>Add</button>
            </div>
        </div>
    );
}

export default App;
