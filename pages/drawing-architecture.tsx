// import type { NextPage } from 'next'
// import Link from 'next/link'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// interface DevNote {
//   title: string,
//   description: string,
//   notes: string,
//   source: string
// }
// interface DevNotes extends Array<DevNote>{}

// export const getStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/web-development');
//   // console.log(res)
//   const data = await res.json();
//   const webdevnotes:DevNotes  = data.webdevnotes
//   return {
//     props:{
//        webdevnotes: webdevnotes
//     }
//   }
// }


// const WebDevelopment: NextPage = ( props ) => {
//   console.log(props)
//   return (
//     <div>
//      <h1>Web stuff will load here</h1>
//     </div>
//   )
// }

// export default WebDevelopment
