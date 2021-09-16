// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  books: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({ books: [
      { name: 'book1', description: 'desc1', notes: 'notes1' }, 
      { name: 'book2', description: 'desc2', notes: 'notes2' }, 
      { name: 'book3', description: 'desc3', notes: 'notes3' }
    ] 
})}
