console.log("Hello");

let colors = ['Violet','Indigo','Blue','Green','Yellow','Orange','Red'];
colorIndex=0;

console.log(colors);

const list=document.querySelector('#list');
let c =colors.forEach(colors=>{
    list.innerHTML +=`<li>${colors}</li>`;
})

function change(){
    setTimeout(function loop(){
       document.bgColor = colors.shift();
       if(colors.length){
            setTimeout(loop,5000);
       }
},5000);
}
function start(){
    setInterval(change(),20000);
}
start();