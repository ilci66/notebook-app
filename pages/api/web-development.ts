// Note to self ==> Gonna try to define the type in a different way in 
// every component or module to practise and learn more 
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let webdevnotes: { 
        title: string, 
        description: string, 
        notes: string, 
        source: string
    }
    res.status(200).json({ webdevnotes: [
      { title: 'book1', description: 'desc1', notes: 'notes1', source: 'source1' }, 
      { title: 'book2', description: 'desc2', notes: 'notes2', source: 'source2' }, 
      { title: 'book3', description: 'desc3', notes: 'notes3', source: 'source3' }, 

    ] 
})}
 