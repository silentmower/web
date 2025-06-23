function refresh(){

let date = new Date();

let day = date.getDate();
if (day < 10){day = "0" + day}

let month = date.getMonth() + 1;
if (month < 11){month= "0" + month}

let year = date.getFullYear();

let hours = date.getHours();
if (hours < 10){hours = "0" + hours}

let minutes = date.getMinutes();
if (minutes < 10){minutes = "0" + minutes}

let secounds = date.getSeconds();
if (secounds < 10){secounds = "0" + secounds}


document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + secounds + "<br>" + year + "-" + month + "-" + day;


setTimeout(refresh, 1000);

}
