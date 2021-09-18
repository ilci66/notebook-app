// Note to self ==> Gonna try to define the type in a different way in 
// every component or module to practise and learn more 
import type { NextApiRequest, NextApiResponse } from 'next'

type MarketingNotes = {
    marketingnotes: object[]
}
type Unsuccessful = {
  success: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MarketingNotes | Unsuccessful>
) {
    type marketingnotes = { 
      title: string,  
      description: string, 
      field: string,
      isRecent: boolean,
      notes: string, 
      source: string
  }[]
  
  let data: marketingnotes = [
      { title: 'design1', field: "email marketing", isRecent: false, description: 'desc1', notes: 'notes1', source: 'source1' }, 
      { title: 'design2', field: "copywriting", isRecent: true, description: 'desc2', notes: 'notes2', source: 'source2' }, 
      { title: 'design3', field: "social media marketing", isRecent: false, description: 'desc3', notes: 'notes3', source: 'source3' },
  ]
  res.status(200).json({ marketingnotes: data })
}

 