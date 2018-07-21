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
      author: "Nelson Mandela",
			quote: "It always seems impossible until it's done."
    },

  {
			author: "Frank Zappa",
			quote: "So many books, so little time."
		},
  	  {   author: "me",
	      quote: "new things"
	  },
  {
    author: "Anonymous",
			quote: "Coz in the end we are all just dreamers in an endless universe."
  },
  {author: "Jai Dewani",
	 	quote:"Ne to github"
		}
]

button.addEventListener("click", function() {
	newQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = '"' + newQuote["quote"] + '"';
	author.innerHTML = "- by " + newQuote["author"];
});
