var $quoteBtn = document.querySelector(".new-quote-btn");
var $main = document.querySelector(".app__main");
var $quote = document.querySelector(".app__quote");
var $author = document.querySelector(".app__author");
var $btns = document.getElementsByClassName("app__btn");
var $body = document.body;
var $tweetBtn = document.getElementsByClassName("retweet-btn");
/*var $retweetLink = document.querySelector(".retweet-link");*/
var $retweetLink = document.getElementsByClassName("retweet-link")[0];

function logQuote(data){
    var author = data.quoteAuthor;
    var quote = data.quoteText;
    if($quote.innerHTML == ""){
        $quote.innerHTML = "❝"+quote;
    }else if($quote.innerHTML == quote){
        getQuote();
        return
    }else if(quote.length >= 100){
        getQuote();
        return 
    }else {
        fadeOutIn($quote,quote);
    }
    var color = randomColor();
    $quote.style.color = color;
    $retweetLink.href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"' + quote + '" ' + author);
    $author.innerHTML = "-"+author;
    $author.style.color = color;
    $body.style.backgroundColor = color;
    $btns[0].style.backgroundColor = color;
    $btns[1].style.backgroundColor = color;
};
function getQuote(){
    var $head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=logQuote";
    $head.appendChild(script);
};

getQuote();
$quoteBtn.addEventListener("click",getQuote);