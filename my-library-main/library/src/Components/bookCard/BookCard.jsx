import React, { useState } from 'react';
import Button from '../button/Button';
import "./book-card.css";

const BookCard = ({ book, deleteBook, read }) => {
    let [state, setState] = useState(read);

    const handleOnClick = (read) => setState((read === "READ") ? "NOT READ" : "READ");

    const handleDeleteButton = () => deleteBook(book.id);

    return (
        <div className="main-div-bookCard">
            <div className='labels-wrapper'>
                <div className='text-div'>{book.author}: </div>
                <div className='text-div'>{book.bookName}</div>
            </div>
            <div className='buttons-wrapper'>
                <div>
                <Button className="btn" onClickHandler={() => handleOnClick(state)}>
                    {state}
                </Button> 
                </div>
                <div>
                    <Button className="btn" onClickHandler={() => 
                        handleDeleteButton(book.bookName, book.author)}>DELETE
                    </Button>
                </div>    
            </div>
        </div>
    );
};

export default BookCard;