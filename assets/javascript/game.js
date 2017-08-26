
var usguess;
var bands = ["El Prodigio", "Geovany Polanco", "Anthony Santos", "Ozuna", "Jay-Z", "Big-Pun", "Joell Ortiz", "AC/DC", "CardiB","Tupac"];
var lowerbands;
var img = document.getElementById("img");
var bdph = ["assets/images/elprod.jpg", "assets/images/gpol.jpg","assets/images/antsan.jpeg", "assets/images/ozuna.jpeg", "assets/images/jayz.jpg", "assets/images/bigpun.jpeg", "assets/images/jortiz.jpeg", "assets/images/acdc.jpeg", "assets/images/cardib.jpg", "assets/images/tupac.jpg"];
var bdph_;
var wins = document.getElementById("wins");
var wins_ = 0;
var compguess;
var currword = document.getElementById("guessdash");
var currword_ = [];
var word = "" ;
var tries = document.getElementById("guessesremain");
var tries_;
var otcome = document.getElementById("outcome");
var lettersguessed_ =[];
var lettersguessed = document.getElementById("lettersguessed");
var index;
var i;
var ace = -1;
var pos = 0;
var len;
// selecting random number

function checkinArray(x,y) {
    for(i = 0; i < y.length; i++) {
        if(x == y[i].toLowerCase()) {
            return true;
            break;
        }
        else if((i == len-1)) {
            return false;
        }
    };
};

function changeimg(a) {
    img.src = a
};



document.onkeyup = function(event) {

        if((word == "")) {
            compguess = Math.floor(Math.random() * bands.length);
            word = bands[compguess];
            bdph_ = bdph[compguess];
            currword_=[];
            lettersguessed_ = [];
            changeimg("assets/images/hangman.jpg");
            for(i = 0; i < word.length; i++) {
                if (word[i] != " ") {
                    currword_.push("_");
                }
                else {
                    currword_.push("\0");
                }
            }
            tries_ = Math.ceil(word.length*1.75);
            if(tries_ > 14) {
                tries_ = 14;
            }
            tries.textContent = tries_;
            otcome.innerHTML ="";
            lettersguessed.textContent = lettersguessed_;

        }
        usguess = event.key;


        if(checkinArray(usguess, word) == true) {

            lowerbands = word.toLowerCase()
            do  {
                pos = lowerbands.indexOf(usguess, ace + 1);
                currword_[pos] = word[pos];
                ace = pos;
            }
            while  (pos != -1);
        }
        else if (lettersguessed_.indexOf(usguess) == -1) {
            tries_ = Number(tries_) - 1;
            tries.textContent = tries_;

        }
        if(lettersguessed_.indexOf(usguess) == -1) {
            lettersguessed_.push(usguess);
        }
        lettersguessed.textContent = lettersguessed_.join(" ");
        currword.textContent = currword_.join(" ");

        if(currword_.indexOf("_") == -1) {
            wins_ = Number(wins_) + 1;
            wins.textContent = wins_;
            changeimg(bdph_);
            otcome.innerHTML ="<h1>You Win!</h1>";
            word = "";
        }
        else if(tries_ == 0) {
            otcome.innerHTML ="<h1>You Loss!</h1>";
            currword.textContent = word;
            changeimg(bdph_);
            word = "";

        }


    }



