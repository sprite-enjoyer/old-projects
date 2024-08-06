import { v4 } from "uuid";
export class Book{
    constructor(bookName, author, readStatus){
        this.bookName = bookName;
        this.author = author;
        this.readStatus = readStatus;
        this.id = v4();

    }
}