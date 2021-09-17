import type { NextApiRequest, NextApiResponse } from 'next'

type Books = {
  books: object[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Books>
) {
    res.status(200).json({ books: [
      { author:"author1" ,name: 'book1', description: 'desc1', notes: 'notes1', rate: 1 }, 
      { author:"author2" ,name: 'book2', description: 'desc2', notes: 'notes2', rate: 2 }, 
      { author:"author3" ,name: 'book3', description: 'desc3', notes: 'notes3', rate: 3 }, 
 
    ] 
})}
 