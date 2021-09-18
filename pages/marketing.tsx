import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

interface MarketingInt {
    title: string,  
    description: string, 
    structureType: string,
    isContemporary: boolean,
    notes: string, 
    source: string
}
interface MarketingInts extends Array<MarketingInt>{}

export const getStaticProps = async () => {
  // const res = await fetch('http://localhost:3000/api/books');
  // const data = await res.json();
  // const books: AllBooks = data.books
  // return {
  //     props: { books: books }
  // }
  const res = await fetch('http://localhost:3000/api/marketing');
  console.log(res)
  const data = await res.json();
  const marketingnotes: MarketingInts  = data.marketingnotes
  return {
    props: { marketingnotes: marketingnotes }
  }
}


const Marketing: NextPage = ( props ) => {
  console.log(props)
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Drawing Notes</h1>
        {}
    </div>
  )
}

export default Marketing
