import { Schema, model } from 'mongoose';

interface Marketing {
    title: string,  
    description: string, 
    field: string,
    isRecent: boolean,
    notes: string, 
    source: string
}

const MarketingSchema = new Schema<Marketing>({
    title: { type: String, required: true } ,
    description: { type: String, required: true } ,
    field: { type: String, required: true } ,
    isRecent : { type: Boolean, required: true} ,
    notes: { type: String, required: true } ,
    source: { type: String, required: true}
}, {
     timestamps: true
    } 
)
const MarketingModel = model<Marketing>('MarketingModel', MarketingSchema)

module.exports = MarketingModel;