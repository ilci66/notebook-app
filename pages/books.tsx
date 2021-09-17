import { NextPage } from "next";

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/books');
    const data = await res.json();
    // console.log(data)
    return {
        props: { books: data.books }
    }
}

// wrote this to get rid of the the type any error in props
interface Props {
    books: object[]
}

const Books: NextPage<Props> = (props) => {
    const { books } = props;
    console.log(books)
    return(
        <div> 
            <h1>The books I read</h1>
        </div>
    )
}

export default Books;