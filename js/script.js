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
// Array of five various quotes and their properties
const quotes = [
  {
  quote: 'Beware; for I am fearless, and therefore powerful.',
  source: 'Mary Shelley',
  citation:'Frankenstein',
  year: 1818,
  tags: ['love','inspiration','triumphant']
},
{
  quote: 'Ask not what your country can do for you - ask what you can do for your country.',
  source: 'John F. Kennedy',
  citation: 'Inaugural speech',
  year: 1961,
  tags: ['patriotic', 'presidential', 'inspirational']
},
{
  quote: "What's a bad miracle?",
  source: 'Jordan Peele',
  citation: 'Nope',
  year: 2022,
  tags: ['horror', 'existential','film']

},
{
  quote: "The mystery of life isn't a problem to solve, but a reality to experience.",
  source:'Frank Herbert',
  citation: 'Dune',
  year: 1965,
  tags: ['sci-fi','curiousity','pondering']
},
{
  quote: 'Living for the future is more important than trying to avenge the past.',
  source: 'Kentaro Miura',
  citation: 'Berserk',
  year: 1991,
  tags: ['manga','berserk','revenge']
}

];
console.log(quotes);



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);