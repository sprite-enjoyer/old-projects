import BookCard from "../bookCard/BookCard";
import { v4 } from "uuid";

const CardList = ({ books, deleteBook }) => {
    return(
        <div>
            <ul>
                {books.map((book) => 
                <BookCard 
                    className="card"
                    key={v4()} 
                    book={book} 
                    deleteBook={deleteBook}
                    read={book.readStatus}
                    />
                )}
            </ul>
        </div> 
    );
};

export default CardList; 