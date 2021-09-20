import type { NextApiRequest, NextApiResponse } from 'next'
import connecter from '../../libraries/connection';
import mongoose from 'mongoose'
import BookModel from '../../models/BookModel';
import { deleteOne, getOne, getAll, createOne } from '../../utils/dbinteractions'



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
  console.log('should be after')

  const { method } = req;
  console.log(method)
  switch(method) {
    case 'GET':
      try {
        const books = await BookModel.find({})
        console.log("books>>>", books)
        res.status(200).json({  books: books })
        // // I have no data in the database yet so still using the dummy data
        // res.status(200).json({ books: [
        //   { author:"author1" ,name: 'book1', description: 'desc1', notes: 'notes1', rate: 1 }, 
        //   { author:"author2" ,name: 'book2', description: 'desc2', notes: 'notes2', rate: 2 }, 
        //   { author:"author3" ,name: 'book3', description: 'desc3', notes: 'notes3', rate: 3 }, 
        // ]}) 
      } catch(error) {
      res.status(400).json({ success: false })
      }
      break
    case 'POST':
      // this is somehow breaking the get request 
      console.log("post req made", req.body)
      // const bookToSave = await new BookModel(req.body)
      // bookToSave.save((err, data) => {
      //   if(err){
      //     return res.status(400).json({success: false})
      //   }else {
      //     return res.status(200).json({success: true})
      //   }
      // })
      // res.status(200).json({success: true})
      break
    default:
      // res.status(400).json({ success: false })
      break
  }
}
 