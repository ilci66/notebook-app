import { Schema, model } from 'mongoose';

interface WebDev {
    title: string,  
    description: string, 
    notes: string, 
    source: string


const WebDevSchema = new Schema<WebDev>({
    title: { type: String, required: true } ,
    description: { type: String, required: true } ,
    notes: { type: String, required: true } ,
    source: { type: String, required: true}
}, {
        timestamps: true
    } 
);
const WebDevModel = model<WebDev>('WebDevModel', WebDevSchema)

module.exports = WebDevModel;