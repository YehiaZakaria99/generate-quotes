var quote = document.querySelector(".quote");
var author = document.querySelector(".quote-author");


var quotesArr = ["Be yourself; everyone else is already taken.", "So many books, so little time."];
var authorArr = ["― Oscar Wilde", "― Frank Zappa"];


function btnClicked() {
    var num = Math.floor(Math.random() * quotesArr.length);
    quote.innerHTML = quotesArr[num];
    author.innerHTML = authorArr[num];
}

