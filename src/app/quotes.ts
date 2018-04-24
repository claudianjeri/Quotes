export class Quotes {
    public showAuthor:boolean;
    constructor(public id: number, public quote: string, public author: string, public date: Date )
    
    { this.showAuthor=false}
}
