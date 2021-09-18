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
  const res = await fetch('http://localhost:3000/api/marketing');
  console.log(res)
  const data = await res.json();
  const marketingnotes: MarketingInts  = data.marketingnotes
  return {
    props: { marketingnotes: marketingnotes }
  }
}

interface MarketingProps {
  marketingnotes:[
      {
          title: string,
          field: string,
          isRecent: boolean,
          description: string,
          notes: string,
          source: string
      }  
  ]
}
const Marketing: NextPage<MarketingProps> = ( props ) => {
  console.log(props)
  const { marketingnotes }: MarketingProps = props;
  console.log(marketingnotes)
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Drawing Notes</h1>
        {marketingnotes.map(note => {
          return(<div key={note.title} className={styles.card}>{note.title}</div>)
        })}
    </div>
  )
}

export default Marketing
