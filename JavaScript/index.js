

var random=Math.floor(Math.random()*6+1);
var random1=Math.floor(Math.random()*6+1);
var add="images/dice"+random+".png";
var add2="images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",add);
document.querySelectorAll("img")[1].setAttribute("src",add2);
if(random>random1)
{
document.querySelector(".container h1").innerText="Player 1 Win's!"
}else if(random<random1){
document.querySelector(".container h1").innerText="Player 2 Win's!"
}else
{
  document.querySelector(".container h1").innerText="Draw!"
}
