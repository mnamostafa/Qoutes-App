let quotes = [
  { text: "If you tell the truth, you don't have to remember anything..", author: "Mark Twain" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "So many books, so little time.", author: "Frank Zappa" }
];

let quoteText = document.getElementById("quote");
let quoteAuthor = document.getElementById("author");
let button = document.getElementById("btn");

let lastIndex = -1;

button.addEventListener("click", function() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

    quoteText.textContent = `${quotes[randomIndex].text}`;
    quoteAuthor.textContent = `${quotes[randomIndex].author}`;
    lastIndex = randomIndex;
});
