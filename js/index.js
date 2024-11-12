var quote = document.querySelector(".quote");
var author = document.querySelector(".quote-author");

var quotesArr = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "It is better to be hated for what you are than to be loved for what you are not.",
  "I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!",
];
var authorArr = [
  "― Oscar Wilde",
  "― Frank Zappa",
  "― Albert Einstein",
  "― Marcus Tullius Cicero",
  "― Bernard M. Baruch",
  "― Mae West",
  "― Mahatma Gandhi",
  "― Ralph Waldo Emerson",
  "― Andre Gide, Autumn Leaves",
  "― Heisenberg",
];

function btnClicked() {
  var num = Math.floor(Math.random() * quotesArr.length);
  quote.innerHTML = quotesArr[num];
  author.innerHTML = authorArr[num];
}
