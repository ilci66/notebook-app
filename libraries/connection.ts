import mongoose from 'mongoose';

const uri: string = process.env.MONGO_URI!
console.log(uri)

const opts: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useFindAndModify: true,
    useCreateIndex: true
}

export default mongoose.connect(uri, opts).then(mongoose => {
return console.log('Database connection established')
})
