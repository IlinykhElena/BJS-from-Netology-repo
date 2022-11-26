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
        let result = null;
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i][type] === value) {
                result =  this.books[i];
            } 
        }
        return result;
    }

      
    giveBookByName(bookName) {
        let givenBook = this.findBookBy("name", bookName);

        if(givenBook != null) {
            let newBooks = [];
            for(let i = 0; i < this.books.length; i++) {
                if(this.books[i] != givenBook) {
                    newBooks.push(this.books[i]);
                }
            }
            this.books = newBooks;                    
        } 
        return givenBook;
    }
}

// Задача №3. Студент
// class Student {
//     constructor(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.marks = [];
//     }

//     addMark(note, subjectName) {
//         let mark = {
//             subjekt: subjectName,
//             mark: note
//           };
//         if(note < 1 || note > 5) {
//             this.mark = mark;
//             this.marks.push(this.mark);
//         } else {
//             console.log("Ошибка, оценка должна быть числом от 1 до 5");
//         }
//     }
    
//     getAverageBySubject(subject) {
//         let marksSumBySubject = 0;
//         let marksBySubjectCount = 0;
//         for(let element in this.marks) {
//             if(element.subject === subject) {
//                 marksSumBySubject = marksSumBySubject + element.mark;
//                 marksBySubjectCount += 1;
//             } else {
//                 console.log("Несуществующий предмет");
//             }
//         }
//         let average = marksSumBySubject / marksBySubjectCount;
//     }
//}
 
    