randomNumber1=Math.floor(Math.random()*6)+1
console.log(randomNumber1);

im1=document.getElementsByClassName('img1')[0];
console.log(im1)
im1.src="images/dice"+randomNumber1+".png"

randomNumber2=Math.floor(Math.random()*6)+1
console.log(randomNumber2);

im2=document.getElementsByClassName('img2')[0];
console.log(im2)
im2.src="images/dice"+randomNumber2+".png"

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML =  "Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML =" Draw!"
}
