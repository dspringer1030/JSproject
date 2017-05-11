//var score = 0;
//var fouls = 0;
var team = 1;
var i = 0;
var TeamTwoFouls = 0;
var TeamOneFouls = 0;
var TeamOneScore = 0;
var TeamTwoFouls = 0;

function runEventLoop() {
    /*Get how many possessions from the text input*/
    /* gebi = getElementById(element, variable to replace) */ 
    gebi('result', '');
    var myLoop = 0;
    Math.floor(gebi('myLoopInput', myLoop));
    console.log(myLoop);
    console.log(typeof myLoop);
    /*Run the loop*/
//    for (var i=0;i<80;i++) {setTimeout(myPlays, 1000);console.log(i);}
    while (i < 100) {animation_loop();i++;}
    
}

function animation_loop(){
    setTimeout(function() {myPlays();
  }, 1000);};

//    while (i < 100) {i++;setInterval(myPlays, 1000);}

//    function gameAction(){setInterval(console.log("work?"), 2000);i++;}; 

    function myPlays()  
        {
        switch (Math.floor((getRandom() * 5) + 1))    
            {case 0: randomEvent = 'Shoots and misses';rebound(0.3);fouled(0.4);break;
            case 1: randomEvent = 'Shoots and makes it';fouled(0.4);score+=2;switchPossession();break;
            case 2: randomEvent = 'Makes a three-pointer!';fouled(0.7);score+=3;switchPossession();break;
            case 3: randomEvent = 'Steal';fouled(0.5);switchPossession();break;
            case 4: randomEvent = 'Tie Up';switchPossession();break;     
            default: randomEvent = 'Shoots and misses';rebound(0.5);                                                       }    
    console.log(randomEvent);
    var resultDisplay = document.getElementById('result').innerHTML;        
    gebi('result', resultDisplay  + '<br/>' + randomEvent + " score: " + score);
    console.log('Foul' + teamvar.toString() + 'Display');
    console.log('Score' + teamvar.toString() + 'Display');        
    gebi('Foul' + teamvar.toString() + 'Display', teamvar + Fouls);
    gebi('Score' + teamvar.toString() + 'Display', teamvar + Score);  
    console.log("i = " + i);
        }

function gebi(dname, pvar) {
    document.getElementById(dname).innerHTML = pvar;
}

function switchPossession() {
    team*=-1;console.log("Change team " + team);
    var team = '';
    if (team == -1) {teamvar = TeamOne;}
    else teamvar = TeamTwo;
}

function getRandom() {
  var result = Math.random();
  return Math.round(result * 10) / 10;  
}

function fouled(percentage){var fouledRnum = getRandom();
                  if (fouledRnum>=percentage){randomEvent+="; fouled";fouls+=1;foulShot();}
                 };    

function foulShot(percentage){var foulRnum = getRandom();
                    if (foulRnum>=percentage){randomEvent+="; makes the foul shot.";score+=1;}
                    else if (foulRnum<percentage){randomEvent+="; misses the foul shot.";}
                   }

function rebound(percentage) {var reboundRnum = getRandom();
                    if (reboundRnum>=percentage){randomEvent+="; offensive rebound.";}
                    else if (reboundRnum<percentage){randomEvent+="; defensive rebound.";switchPossession();}}
 