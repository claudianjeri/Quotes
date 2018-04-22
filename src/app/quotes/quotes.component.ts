import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit{
  constructor() { }
  ngOnInit() {
  }

  quotes = [
    new Quotes( 'We must balance conspicuous consumption with conscious capitalism.',  "Kevin Kruse", new Date(2018, 5, 4)),
    new Quotes("Life is what happens to you while you’re busy making other plans.", "John Lennon", new Date(2018, 6, 8)),
    new Quotes( "We become what we think about.", "Earl Nightingale", new Date(2018, 6, 9)),
    new Quotes("Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "Mark Twain", new Date(2018, 4, 6)),
    new Quotes("Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll", new Date(2018, 1, 12)),
    new Quotes("The most common way people give up their power is by thinking they don’t have any.", "Alice Walker", new Date(2018, 12, 5)),
    new Quotes("The mind is everything. What you think you become.", "Buddha", new Date(2018, 4, 4))
 ]

 addNewQuote(quote){
   quote.date = new Date(quote.date)
   this.quotes.push(quote)
 }

 
 deleteGoal(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
      
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}

}
