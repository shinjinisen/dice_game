var r1= Math.floor(Math.random()*6)+1;
var r2= Math.floor(Math.random()*6)+1;
var image1="./images/dice"+r1+".png";
var image2="./images/dice"+r2+".png";
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if(r1>r2)
{
    document.querySelector('h1').innerHTML="PLAYER 1 WINS🚩";
}

else if(r1<r2)
{
    document.querySelector('h1').innerHTML="PLAYER 2 WINS🚩";
}

else
{
    document.querySelector('h1').innerHTML="DRAW😞";
}
