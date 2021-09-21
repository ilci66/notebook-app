import connecter from '../libraries/connection'
import BookModel from '../models/BookModel';
// import DevModel from '../models/DevModel';
// import MarketingModel from '../models/MarketingModel';
import mongoose from 'mongoose';

connecter();

export const createOne = async (itemType:string, itemData:string) => {
    return console.log('create')
}

export const getAll = async (itemType:string) => {
    // console.log('get all')
    if(itemType === "book"){ 
        console.log('get all books')
        BookModel.find({}, (err:object, data:object) => {
            if(err) { return console.log(err)}
            else if(!data) {return console.log('handle no data')}
            else { return data }
        }) 
    }
    // if(itemType === "dev"){ return DevModel.find({}) }
    // if(itemType === "marketing"){ return MarketingModel.find({}) }
}

export const getOne = async (itemType:string, itemData:string) => {
    return console.log('get one')
}

export const deleteOne = async (itemType:string, itemData:string) => {
    return console.log('delete one')
}