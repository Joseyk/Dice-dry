var fun=Math.round(Math.random()*6);
var diceImg='dice'+fun+'.png';
var imgSource='images/'+diceImg;

var img1=document.querySelectorAll('img')[0];

img1.setAttribute('src',imgSource);

var fun2=Math.round(Math.random()*6);
var imgSource2='images/dice'+fun2+'.png';

document.querySelectorAll('img')[1].setAttribute('src',imgSource2);


if(fun>fun2){
    document.querySelector('h1').innerHTML='Player 1 Wins!';
}
else if(fun2>fun){
    document.querySelector('h1').innerHTML='Player 2 Wins!';
}
else{
    document.querySelector('h1').innerHTML='Draw!';
}