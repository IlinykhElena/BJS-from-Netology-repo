// Задача №1. Печатное издание

class PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    /**
     * @param {number} newState
     */
    set state(newState) {
        if(newState < 0) {
            this._state = 0;
        } else if(newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
		super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super (author, name, releaseDate, pagesCount);
		this.type = "detective";
    }
}

// Задача №2. Библиотека
class Library {
	constructor(name, books){
		this.name = name;
		this.books = [];
	}

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
        return this.books;
    }

    findBookBy(type, value) {
        // for(let element of this.books) {
        //     if(element.type === value) {
        //         return element;
        //     } else {
        //         return null;
        //     }
        // }
        this.books.find(el => el.type == value);
    }

      
    // giveBookByName(bookName) {
    //     if(this.findBookBy(bookName) != null) {
    //         delete this.book;
    //         return Book;
    //     } else {
    //         return null;
    //     }
    // }
}