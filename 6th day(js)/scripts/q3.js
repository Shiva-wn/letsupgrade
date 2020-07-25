 console.log("Hello");


var t=prompt("enter name");
document.write(`<div  style="text-align:center"><h1> Welcome ${t} </h1></div>`);
document.bgColor="Grey";


const ctime=document.getElementById('clock');
function currentTime(){
var date=new Date();
let time=date.toLocaleTimeString();
ctime.innerText=time;
}
setInterval(currentTime,1000);

const color=document.getElementById('dark-mode')
function tog(){
    var element=document.getElementById("tog");
    element.classList.toggle('dark-mode');
}    
tog();
  