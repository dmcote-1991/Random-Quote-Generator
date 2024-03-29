/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `"Programming isn't about what you know; it's about what you can figure out."`,
    source: `Chris Pine`,
    citation: `Learn to Program`,
  },
  {
    quote: `"The most damaging phrase in the language is 'We've always done it this way!'"`,
    source: `Grace Murray Hopper`,
    year: `1987`
  },
  {
    quote: `"Everybody should learn to program a computer because it teaches you how to think."`,
    source: `Steve Jobs`,
    year: `1995`
  },
  {
    quote: `"Experience is the name everyone gives to their mistakes."`,
    source: `Oscar Wilde`,
    citation: `Lady Windermere's Fan`,
    year: `1892`
  },
  {
    quote: `"Code is like humor. When you have to explain it, it's bad."`,
    source: `Cory House`,
  }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let html = `<p class="quotes">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  if (randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`
  }
  html += `</p>`
  return html;
}
document.getElementById(`quote-box`).innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
