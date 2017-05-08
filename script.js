function logQuote(data){
    function randomColor(){
            var collect = [
                "#859639",
                "#539639",
                "#39965e",
                "#396d96",
                "#423996",
                "#685ec4",
                "#b45ec4",
                "#c45e85",
                "#46727a",
                "#8bb9c1",
                "#4b8473",
                "#6b8e74"
            ];
            var collectLength = collect.length;
            var n = Math.floor((Math.random()*collectLength)+1);
            return collect[n];
        };
    var author = data.quoteAuthor;
    var quote = data.quoteText;
    console.log("author: "+author+"; "+"quote: "+quote);
    if($quote.innerHTML == ""){
        $quote.innerHTML = "❝"+quote;
    }else{
        fadeOutIn($quote,quote);
    }
    var color = randomColor();
    $quote.style.color = color;
    $author.innerHTML = "-"+author;
    $author.style.color = color;
    $body.style.backgroundColor = color;
    $btns[0].style.backgroundColor = color;
    $btns[1].style.backgroundColor = color;
}
var $head = document.getElementsByTagName('head')[0];
var script = document.createElement("script");
script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=logQuote";
$head.appendChild(script);
var $quoteBtn = document.querySelector(".new-quote-btn");
var $main = document.querySelector(".app__main");
var $quote = document.querySelector(".app__quote");
var $author = document.querySelector(".app__author");
var $btns = document.getElementsByClassName("app__btn");
var $body = document.body;

function quoteBtnFunction(){
    var script = document.createElement("script");
    script.src = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=logQuote";
    $head.appendChild(script);
};

$quoteBtn.addEventListener("click",quoteBtnFunction);