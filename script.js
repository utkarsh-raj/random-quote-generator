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
	       {        author: "me",
	                quote: "new things"
	       }
	]

button.addEventListener("click", function() {
	newQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = '"' + newQuote["quote"] + '"';
	author.innerHTML = "- by " + newQuote["author"];
});
