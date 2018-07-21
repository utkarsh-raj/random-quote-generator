var quote = document.querySelector("#quote");
var author = document.querySelector("#author");
var button = document.querySelector("button");






quote.innerHTML = "Hello from div!";


var quotes = [
	
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
    }

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
	
	author: "Aristotle",
	quote: "The more we try to know, we come to know how much we don't know."
	
	},
  {
    author: "Anonymous",
			quote: "Coz in the end we are all just dreamers in an endless universe."
  },
  {author: "Jai Dewani",
	 	quote:"Ne to github"
  },
	
	{author:"Halsey",
		quote:"You ripped at every edge but you are still a masterpiece."}
]

button.addEventListener("click", function() {
	newQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = '"' + newQuote["quote"] + '"';
	author.innerHTML = "- by " + newQuote["author"];
});
