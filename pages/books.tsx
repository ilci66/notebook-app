import { NextPage } from "next";
import BookClass from '../classes/book';
import styles from '../styles/Home.module.css';
import { useState } from 'react';


// working on this to get rid of book.name doesn't exist error
interface AllBook {
    author: string,
    name: string,
    description: string,
    notes: string,
    rate: number
}
interface AllBooks extends Array<AllBook>{}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/books');
    const data = await res.json();
    const books: AllBooks = data.books
    return {
        props: { books: books }
    }
}


// wrote this to get rid of the the type any error in props
interface BookProps {
    books:[
        {
            author: string,
            name: string,
            description: string,
            notes: string,
            rate: number
        }  
    ]
}

// const Books: NextPage<Props> = (props) => {
const Books: NextPage<BookProps> = (props) => {
    // props.books: object[]
    const { books } = props
    // console.log(books)

    // instead of going with undefined use strings to let typescript know what to expect
    // or tell what type to expect when defining these
    const [ author, setAuthor ] = useState("");
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ notes, setNotes ] = useState("");
    const [ rate, setRate ] = useState("");

    let newBook = new BookClass( author, name, description, notes, rate )



    const createBook = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('create a book', name, author, description, notes, rate )
    }
    
    return(
        <div className={styles.container}> 
            <div>
                <h1>The books I've read</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.name}>{book.name}</li>
                    ))}
                </ul>
            </div>
            <div className="form-box">
                <form onSubmit={createBook}>
                    <label>
                        Author:
                        <input 
                            type="text" 
                            name="author"
                            onChange={(event) => setAuthor(event.target.value)}
                        /> 
                    </label>
                    <label>
                        Book Name:
                        <input 
                            type="text" 
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                        /> 
                    </label>
                    <label>
                        Description:
                        <input 
                            type="text" 
                            name="description"
                            onChange={(event) => setDescription(event.target.value)}
                        /> 
                    </label>
                    <label>
                        Notes:
                        <input 
                            type="text" 
                            name="notes"
                            onChange={(event) => setNotes(event.target.value)}
                        /> 
                    </label>
                    <label>
                        Personal Rating:
                        <input 
                            type="number" 
                            step="1" 
                            name="rate" 
                            min="1" 
                            max="10"
                            onChange={(event) => setRate(event.target.value)}
                        /> 
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Books;