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
    new Quotes( 1,'We must balance conspicuous consumption with conscious capitalism.',  "Kevin Kruse", new Date(2018, 5, 4)),
    new Quotes(2, "Life is what happens to you while you’re busy making other plans.", "John Lennon", new Date(2018, 6, 8)),
    new Quotes( 3,"We become what we think about.", "Earl Nightingale", new Date(2018, 6, 9)),
    new Quotes(5, "Life is 10% what happens to me and 90% of how I react to it.", "Charles Swindoll", new Date(2018, 1, 12)),
    new Quotes(6, "The most common way people give up their power is by thinking they don’t have any.", "Alice Walker", new Date(2018, 12, 5)),
    new Quotes(7, "The mind is everything. What you think you become.", "Buddha", new Date(2018, 4, 4))
 ]

 addNewQuote(quotes){
   quotes.id = quotes.Length+ 1;
   quotes.date = new Date(quotes.date)
   this.quotes.push(quotes)
   
 }

 
 quoteDelete(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
      
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}

}
