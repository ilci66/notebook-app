import type { NextApiRequest, NextApiResponse } from 'next'
import connecter from '../../libraries/connection';
// not necessary for now,
// import BookModel from '../../models/BookModel';

type Books = {
  books: object[]
}
type Unsuccessful = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Books | Unsuccessful>
) {
  await connecter();

  const { method } = req;

  switch(method) {
    case 'GET':
      try {
        // const allbooks = await BookModel.find({})
        // I have no data in the database yet so still using the dummy data
        res.status(200).json({ books: [
          { author:"author1" ,name: 'book1', description: 'desc1', notes: 'notes1', rate: 1 }, 
          { author:"author2" ,name: 'book2', description: 'desc2', notes: 'notes2', rate: 2 }, 
          { author:"author3" ,name: 'book3', description: 'desc3', notes: 'notes3', rate: 3 }, 
        ]}) 
      } catch(error) {
      res.status(400).json({ success: false })
      }
      break
    case 'POST':
      // handle creation
      res.status(200).json({success: true})
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
 