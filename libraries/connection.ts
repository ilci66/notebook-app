import mongoose from 'mongoose';

const uri: string = process.env.MONGO_URI!
// console.log(uri)

// gonna chache the database connection but keep getting some kind of type issue 
// created a post about this on stackoverflow
// let cached = global.mongoose

// console.log(typeof globalThis.mongoose)

const opts: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    // these options apparently not supported
    // bufferMaxEntries: 0,
    // useFindAndModify: true,
    // useCreateIndex: true
}
const connecter = () => {
    mongoose.connect(uri, opts).then(mongoose => {
        return console.log('Database connection established')
    })
}

export default connecter
