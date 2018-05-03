export class Quotes {
    public showAuthor:boolean; 
    constructor(public id: number, public quote: string, public author: string, public date: Date, public upvotes:number, public downvotes:number )
    
    { this.showAuthor=false}
    upVote(){
        this.upvotes +=1
    }
    downVote(){
        this.downvotes +=1
    }
}
