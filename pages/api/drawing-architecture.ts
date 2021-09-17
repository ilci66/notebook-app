// Note to self ==> Gonna try to define the type in a different way in 
// every component or module to practise and learn more 
import type { NextApiRequest, NextApiResponse } from 'next'

type DrawingNotes = {
    drawingnotes: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DrawingNotes>
) {
    type drawingnotes = { 
      title: string,  
      description: string, 
      structureType: string,
      isContemporary: boolean,
      notes: string, 
      source: string
  }[]
  
  let data: drawingnotes = [
      { title: 'webdev1', structureType: "farm house", isContemporary: false, description: 'desc1', notes: 'notes1', source: 'source1' }, 
      { title: 'webdev2', structureType: "beach house", isContemporary: true, description: 'desc2', notes: 'notes2', source: 'source2' }, 
      { title: 'webdev3', structureType: "church", isContemporary: false, description: 'desc3', notes: 'notes3', source: 'source3' },
  ]
  res.status(200).json({ drawingnotes: data })
}

 