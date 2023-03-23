setInterval(time,1000)
function time(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = "PM";
    let date = d.getDate();
    if(h<13){
        ampm = "AM"
    }
    document.getElementById("h24").innerHTML = h;
    if(h>12){
        h = h-12
    }
    h =h<10?"0"+h:h;
    m =m<10?"0"+m:m;
    s =s<10?"0"+s:s;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
    document.getElementById("am").innerHTML = ampm;
    document.getElementById("date").innerHTML =date;
    document.getElementById("month").innerHTML = new Date().getMonth()+1;
    document.getElementById("year").innerHTML = new Date().getFullYear()-2000;
    document.getElementById("year1").innerHTML = new Date().getFullYear();
    switch(new Date().getDay()){
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Teusday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
    }
    document.getElementById("day").innerHTML = day;

switch(new Date().getDay()){
    case 0:
    day1 = "Sun";
    break;
    case 1:
    day1 = "Mon";
    break;
    case 2:
    day1 = "Teu";
    break;
    case 3:
    day1 = "Wed";
    break;
    case 4:
    day1 = "Thu";
    break;
    case 5:
    day1 = "Fri";
    break;
    case 6:
    day1 = "Sat";
    break;
}
document.getElementById("day1").innerHTML = day1;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const dn = new Date();
let name = month[dn.getMonth()];
document.getElementById("month1").innerHTML = name;
const month1 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const dn1 = new Date();
let name1 = month1[dn1.getMonth()];
document.getElementById("month2").innerHTML = name1;



}


function system(){
    document.getElementById(1111).style.backgroundColor = "white";
    document.getElementById(111).style.backgroundColor = "white";
    document.getElementById(11).style.backgroundColor = "white";
    document.getElementById(1).style.backgroundColor = "black";
    document.getElementById("body").style.backgroundImage =  "none";
    document.getElementById("body").style.backgroundColor = "#f4f4f4";
    document.getElementById("body").style.color = "black";
}
function dark(){
    document.getElementById(1111).style.backgroundColor = "white";
    document.getElementById(11).style.backgroundColor = "white";
    document.getElementById(1).style.backgroundColor = "white";
    document.getElementById(111).style.backgroundColor = "black";
    document.getElementById("body").style.backgroundImage =  "none";
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
}
function light(){
    document.getElementById(1111).style.backgroundColor = "white";
    document.getElementById(1).style.backgroundColor = "white";
    document.getElementById(111).style.backgroundColor = "white";
    document.getElementById(11).style.backgroundColor = "black";
    document.getElementById("body").style.backgroundImage =  "none";
    document.getElementById("body").style.backgroundColor = "#f4f4f4";
    document.getElementById("body").style.color = "black";
}
function bing(){
    document.getElementById("dot1").style.backgroundColor = "#888888";
    document.getElementById(1).style.backgroundColor = "white";
    document.getElementById(111).style.backgroundColor = "white";
    document.getElementById(11).style.backgroundColor = "white";
    document.getElementById(1111).style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
    document.getElementById("body").style.backgroundImage =  "url('https://source.unsplash.com/user/wsanter')";
    var x = document.getElementById("mage");
    if(x.style.display == "block"){
        x.style.display = "none"
    }else{
        x.style.display= "block"
    }
}
//seconds
function hide(){
    document.getElementById(22).style.backgroundColor = "white";
    document.getElementById(2).style.backgroundColor = "black";
    document.getElementById("s").style.display = "none";
}
function show(){
    document.getElementById(2).style.backgroundColor = "white";
    document.getElementById(22).style.backgroundColor = "black";
    document.getElementById("s").style.display = "block";
}
//hours
function h24(){
    document.getElementById(333).style.backgroundColor = "white";
    document.getElementById(33).style.backgroundColor = "white";
    document.getElementById(3).style.backgroundColor = "black";
    document.getElementById("h").style.display = "none";
    document.getElementById("am").style.display = "none";
    document.getElementById("h24").style.display = "block"; 
}
function h12(){
    document.getElementById(333).style.backgroundColor = "white";
    document.getElementById(3).style.backgroundColor = "white";
    document.getElementById(33).style.backgroundColor = "black";
    document.getElementById("am").style.display = "none";
    document.getElementById("h24").style.display = "none"; 
    document.getElementById("h").style.display = "block";
}
function ham(){
    document.getElementById(33).style.backgroundColor = "white";
    document.getElementById(3).style.backgroundColor = "white";
    document.getElementById(333).style.backgroundColor = "black";
    document.getElementById("h24").style.display = "none"; 
    document.getElementById("am").style.display = "block";
    document.getElementById("h").style.display = "block";
    console.log("hello");
}
//date
function dh(){
    dsl1.style.display = "none";
    document.getElementById(444).style.backgroundColor = "white";
    document.getElementById(44).style.backgroundColor = "white";
    document.getElementById(4).style.backgroundColor = "black";
    document.getElementById("date").style.display = "none";
    document.getElementById("month").style.display = "none";
}
function d(){
    dsl1.style.display = "none";
    document.getElementById(444).style.backgroundColor = "white";
    document.getElementById(4).style.backgroundColor = "white";
    document.getElementById(44).style.backgroundColor = "black";
    document.getElementById("month").style.display = "none";
    document.getElementById("date").style.display = "block";
}
function dm(){
    dsl1.style.display = "block";
    document.getElementById(4).style.backgroundColor = "white";
    document.getElementById(44).style.backgroundColor = "white";
    document.getElementById(444).style.backgroundColor = "black";
    document.getElementById("date").style.display = "block";
    document.getElementById("month").style.display = "block";
}
//day
function dayhide(){
    document.getElementById(555).style.backgroundColor = "white";
    document.getElementById(55).style.backgroundColor = "white";
    document.getElementById(555).style.backgroundColor = "black";
    document.getElementById("day").style.display = "none";
    document.getElementById("day1").style.display = "none";
}
function dayfull(){
    document.getElementById(555).style.backgroundColor = "white";
    document.getElementById(5).style.backgroundColor = "white";
    document.getElementById(55).style.backgroundColor = "black";
    document.getElementById("day").style.display = "block";
    document.getElementById("day1").style.display = "none";
}
function dayshort(){
    document.getElementById(5).style.backgroundColor = "white";
    document.getElementById(55).style.backgroundColor = "white";
    document.getElementById(5).style.backgroundColor = "black";
    document.getElementById("day").style.display = "none";
    document.getElementById("day1").style.display = "block";
}
//year
function yearhide(){
    dsl.style.display = "none";
    document.getElementById(77).style.backgroundColor = "white";
    document.getElementById(7).style.backgroundColor = "white";
    document.getElementById(777).style.backgroundColor = "black";
    document.getElementById("year").style.display = "none";
    document.getElementById("year1").style.display = "none";
}
function year(){
    dsl.style.display = "block";
    document.getElementById(77).style.backgroundColor = "white";
    document.getElementById(777).style.backgroundColor = "white";
    document.getElementById(7).style.backgroundColor = "black";
    document.getElementById("year1").style.display = "none";
    document.getElementById("year").style.display = "block";
}
function year1(){
    dsl.style.display = "block";
    document.getElementById(777).style.backgroundColor = "white";
    document.getElementById(7).style.backgroundColor = "white";
    document.getElementById(77).style.backgroundColor = "black";
    document.getElementById("year").style.display = "none";
    document.getElementById("year1").style.display = "block";
}
//month
function monhide(){
    document.getElementById(66).style.backgroundColor = "white";
    document.getElementById(6).style.backgroundColor = "white";
    document.getElementById(666).style.backgroundColor = "black";
    document.getElementById("month1").style.display = "none";
    document.getElementById("month2").style.display = "none";
}
function monfull(){
    document.getElementById(66).style.backgroundColor = "white";
    document.getElementById(666).style.backgroundColor = "white";
    document.getElementById(66).style.backgroundColor = "black";
    document.getElementById("month2").style.display = "none";
    document.getElementById("month1").style.display = "block";
}
function monshort(){
    document.getElementById(66).style.backgroundColor = "white";
    document.getElementById(666).style.backgroundColor = "white";
    document.getElementById(6).style.backgroundColor = "black";
    document.getElementById("month1").style.display = "none";
    document.getElementById("month2").style.display = "block";
    }
