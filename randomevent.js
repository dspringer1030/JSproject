function runEventLoop() {
    /*Get how many possessions from the text input*/
    document.getElementById('result').innerHTML = '';
    var myLoop = Math.floor(document.getElementById('myLoopInput').innerHTML);
    console.log(myLoop);
    console.log(typeof myLoop);
    var score = 0;
    var fouls = 0;
    var i = 0;
    /*Run the loop*/
    function playOn(){
    if (i<80) {
//    var rNum =  
//        console.log(rNum); 
    i++;    
    console.log(i);    
    switch (Math.floor((Math.random() * 6) + 1))    
        {case 0: randomEvent = 'Shoots and misses';fouled();break;
         case 1: randomEvent = 'Shoots and makes it';fouled();score+=2;break;
         case 2: randomEvent = 'Makes a three-pointer!';fouled();score+=3;break;
         case 3: randomEvent = 'Steal';fouled();break;         
         default: randomEvent = 'Shoots and misses';                                                       }
    function fouled(){var fouledRnum = Math.random();if (fouledRnum>=0.5){randomEvent+="; fouled";fouls+=1;foulShot();}};
    function foulShot(){var foulRnum = Math.random();if (foulRnum>=0.5){randomEvent+="; makes the foul shot.";score+=1;}else if (foulRnum<0.5){randomEvent+="; misses the foul shot.";}}    
    console.log(randomEvent);
    var resultDisplay = document.getElementById('result').innerHTML;    
    document.getElementById('result').innerHTML = resultDisplay  + '<br/>' + randomEvent + " score: " + score;
    document.getElementById('ScoreDisplay').innerHTML = score;
    document.getElementById('FoulDisplay').innerHTML = fouls;    
    }    
    setTimeout(playOn, 1000);}
}
 