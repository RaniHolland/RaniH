let usernamefromstorage= localStorage.getItem("username")

if (!usernamefromstorage){
    location.href = "index.html"
}

let title = document.getElementById("title")
title.innerHTML= 'ברוך הבא'+' '+ usernamefromstorage

let total=0
let amount = document.getElementById("amount")
let totalf= localStorage.getItem("total")

if (totalf){
    total= Number(totalf)
    amount.inner= total
}
function change(num){
    total= total + num
    amount.innerHTML= total
    localStorage.setItem("total", total)
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("total");
    location.href = "index.html";
}