var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var myList = document.getElementById("list");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup-todo")[0];
var popupAge = document.getElementsByClassName("popup-age")[0];
var popupName = document.getElementsByClassName("popup-name")[0];
var popupSub = document.getElementsByClassName("popup-subscribe")[0];
var popupYes = document.getElementsByClassName("popup-yes")[0];
var popupNo = document.getElementsByClassName("popup-no")[0];
var answerName = document.getElementsByClassName("input-answer")[0];
var answerAge = document.getElementsByClassName("input-answer")[1];
var win = document.getElementsByClassName("win")[0];
var lose = document.getElementsByClassName("lose")[0];
var close = document.querySelector(".close-todo");
var closeYes = document.querySelector(".close-yes");
var closeNo = document.querySelector(".close-no");
var accessBlock = document.querySelector(".access-block");
var i = 1;
var name = " ";
var age = 0;
var subscribe = false;

function addItem(){
  let newLi = document.createElement("li");
  ++i;
  newLi.innerHTML = "Задача "+ i;
  newLi.className = "item";
  myList.appendChild(newLi);

  if (popup.style.display == "block") {
    popup.style.display = "none";
  }
}

function delItem(){
  --i;
  myList.removeChild(story[story.length-1]);
  if(i == 0){
    popup.style.display = "block";
  }
}

function closePopup(){
  popup.style.display = "none";
}

function checkName(){
  name = answerName.value;
  lose.textContent = name + ", " + lose.textContent;
  win.textContent = name + ", " + win.textContent;
  console.log(lose.textContent);
  popupName.style.display = "none";
  popupAge.style.display = "block";
}

function checkAge(){
  age = answerAge.value;
  popupAge.style.display = "none";
  popupSub.style.display = "block";
}

function accessSuccess(pop){
  popupSub.style.display = "none";
  if (age >= 18) {
    popupYes.style.display = "block";
  } else {
    popupNo.style.display = "block";
  } 
}

function accessFail(pop){
  popupSub.style.display = "none";
  popupNo.style.display = "block";
}

function closeFail(){
  popupNo.style.display = "none";
}

function closeSuccess(){
  popupYes.style.display = "none";
  accessBlock.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
btn3.addEventListener("click", checkName);
btn4.addEventListener("click", checkAge);
btn5.addEventListener("click", accessSuccess);
btn6.addEventListener("click", accessFail);
close.addEventListener("click", closePopup);
closeNo.addEventListener("click", closeFail);
closeYes.addEventListener("click", closeSuccess);
