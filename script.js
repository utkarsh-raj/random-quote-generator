var quote = document.querySelector("#quote");
var author = document.querySelector("#author");
var button = document.querySelector("button");






quote.innerHTML = "Hello from div!";


var quotes = [
		{
			author: "Jai Dewani",
			quote: "Hello this is a quote!"
		},
		{
			author: "Jai Dewani",
			quote: "Hello this is another quote!"
		},
		{
			author: "Jai Dewani",
			quote: "Hello this is also a quote!"
		},
		{
			author: "Jai Dewani",
			quote: "Hello this is a quote by Jai!"
    },
    {
      author: "Frank Zappa",
			quote: "So many books, so little time."
    },
  









  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
			author: "Avani Gupta",
			quote: "whatever you do just do it good!"
		},
		{
			author: "Avani Gupta",
			quote: "Dream is something which doesnt let you sleep!"
		},
	{
			author: "Avani Gupta",
			quote: "Arise,Awake and stop not untill you reach your goal!"
		},
	


button.addEventListener("click", function() {
	newQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = '"' + newQuote["quote"] + '"';
	author.innerHTML = "- by " + newQuote["author"];
});
