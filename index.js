var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var random_dice1 = "dice" + randomNumber1 +".png";
var random_path_img1 = "/additional files/images/" + random_dice1;
var image_select1= document.querySelectorAll("img")[0];
image_select1.setAttribute("src", random_path_img1);



var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var random_dice2 = "dice" + randomNumber2 +".png";
var random_path_img2 = "/additional files/images/" + random_dice2;
var image_select2 = document.querySelectorAll("img")[1];
image_select2.setAttribute("src", random_path_img2);


// functoning
if(randomNumber2 > randomNumber1)
{
    document.getElementById("change_tittle").innerHTML = "Player 2 Wins 🏆";
}
else if(randomNumber2 < randomNumber1)
{
    document.getElementById("change_tittle").innerHTML = "🏆 Player 1 Wins";
}
else
{
    document.getElementById("change_tittle").innerHTML = "Draw!";
}