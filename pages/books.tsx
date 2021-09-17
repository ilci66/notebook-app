import { NextPage } from "next";


// working on this to get rid of book.name doesn't exist error
interface AllBook {
    name: string,
    description: string,
    notes: string
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
interface Props {
    books:[
        {
            name: string,
            description: string,
            notes: string
        }  
    ]
}

// const Books: NextPage<Props> = (props) => {
const Books: NextPage<Props> = (props) => {
    // props.books: object[]
    const { books } = props
    console.log(books)
    return(
        <div> 
            <h1>The books I read</h1>
            <ul>
            {books.map(book => (
                <li key={book.name}>{book.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default Books;