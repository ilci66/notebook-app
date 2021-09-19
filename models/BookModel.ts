import { Schema, model } from 'mongoose';

interface Book {
    author: string,
    name: string,
    description: string ,
    notes: string,
    rate: number
}


const BookSchema = new Schema<Book>({
    author: { type: String, required: true } ,
    name: { type: String, required: true } ,
    description: { type: String, required: true } ,
    notes: { type: String, required: true } ,
    rate: { type: Number, required: true }
}, {
        timestamps: true
    } 
);
const BookModel = model<Book>('BookModel', BookSchema)

export default BookModel;