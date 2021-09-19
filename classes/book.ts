export default class BookClass {
    author: string;
    name: string
    description: string;
    notes: string;
    rate: string;
    constructor(author: string, name: string, description: string, notes: string, rate: string) 
    {
        this.author = author;
        this.name = name;
        this.description = description;
        this.notes = notes;
        this.rate = rate;
    }
}