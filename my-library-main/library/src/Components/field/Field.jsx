import Button from "../button/Button";
import { Book } from "../../models/Book";
import "./field.css"

const Field = ({ addBook }) => {

    const handleOnClick = () => {

        const bookName = document.getElementById("book-input").value;
        const author = document.getElementById("author-input").value;
        const readStatus = (document.getElementById("readStatus").checked ? "READ" : "NOT READ");

        ( bookName === "" || author === "")
         ? alert("Please fill out all the fields")
         : addBook( new Book(  bookName,  author, readStatus ));
        
    };

    return(
        <div className="main-div-field">
            <label className="field-label">
                Book
            </label>
                <input type="text" className="field-input" id="book-input" />
            <label className="field-label">
                Author
            </label>
                <input type="text" className="field-input" id="author-input"/>
            <label className="field-label"> Read
                <input type="checkbox" id="readStatus" name="already read"/>
            </label>
            <Button onClickHandler={handleOnClick} className="btn"><span className="button-text">SUBMIT</span></Button>
        </div>
    )
}

export default Field;
