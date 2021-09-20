// Note to self ==> Gonna try to define the type in a different way in 
// every component or module to practise and learn more 
import type { NextApiRequest, NextApiResponse } from 'next'
import connecter from '../../libraries/connection';

connecter();

type WebNotes = {
  webdevnotes: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WebNotes>
) {
    let webdevnotes: { 
      title: string, 
      description: string, 
      notes: string, 
      source: string
  }[]
  let data = [
      { title: 'webdev1', description: 'desc1', notes: 'notes1', source: 'source1' }, 
      { title: 'webdev2', description: 'desc2', notes: 'notes2', source: 'source2' }, 
      { title: 'webdev3', description: 'desc3', notes: 'notes3', source: 'source3' },
  ]
  res.status(200).json({ webdevnotes: data })
}

 