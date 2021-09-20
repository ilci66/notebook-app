import { Schema, model } from 'mongoose';

interface Dev {
    title: string,  
    description: string, 
    notes: string, 
    source: string
}

const DevSchema = new Schema<Dev>({
    title: { type: String, required: true } ,
    description: { type: String, required: true } ,
    notes: { type: String, required: true } ,
    source: { type: String, required: true}
}, {
        timestamps: true
    } 
);
const DevModel = model<Dev>('DevModel', DevSchema)

module.exports = DevModel;