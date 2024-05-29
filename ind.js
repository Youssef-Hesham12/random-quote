var check=6;
var conrainerQuotes=["Be yourself; everyone else is already taken.",
"So many books, so little time― Frank Zappa",
"A room without books is like a body without a soul"
,"Be the change that you wish to see in the world.",
"To live is the rarest thing in the world. Most people exist, that is all",
"Always forgive your enemies; nothing annoys them so much."]

function displayQuote(){
    
    var rand=Math.floor(Math.random()*6);
    while(check==rand){
        rand=Math.floor(Math.random()*6);
    }
        var Qoute=conrainerQuotes[rand];
        document.getElementById("my-qoute").innerHTML=Qoute;
    check=rand;
}