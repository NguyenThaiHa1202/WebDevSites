// JavaScript Document
function changeText() {
    var para2 = document.getElementById("para2");
    para2.textContent="I love Javascript";
}

function changeBg() {
    var hd1 = document.getElementById("hd1");
    hd1.style.backgroundColor="yellow";
}

function init() {
    var para1 = document.getElementById("para1");
    para1.onclick= changeText; 
    
    var para3 = document.getElementById("para3");
    para3.onclick= changeBg; 
}

window.onload = init;