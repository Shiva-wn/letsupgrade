console.log("fetch api");

async function todo(){
    const response=await fetch("http://jsonplaceholder.typicode.com/todos");
    const data=await response.json();
    console.log(data);
}
todo();