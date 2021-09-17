import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
    // const res = await fetch('http://localhost:3000/api/web-development');
    // just for testing
    const res = await fetch('http://localhost:3000/api/books');
    const data = await res.json();

    console.log(data)
    return {
        // props: { books: books }
    }
}


const WebDevelopment: NextPage = () => {
  return (
    <div>
     <h1>Web stuff will load here</h1>
    </div>
  )
}

export default WebDevelopment
