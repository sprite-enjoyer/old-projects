import Field from "./Components/field/Field";
import CardList from "./Components/cardList/CardList";
import React, {useState} from "react";
import "./App.css"
const App = () => {
  let [books, setBooks] = useState([]);

  const addBook = (book) => setBooks((prev) => [...prev, book]);

  const deleteBook = (id) => setBooks(books.filter(book => book.id !== id));

  return (
    <div className="main-div-app">
      <Field className="field" addBook={addBook}/>
      <CardList className="card-list" books={books} deleteBook={deleteBook}/> 
    </div>
  );
}

export default App;