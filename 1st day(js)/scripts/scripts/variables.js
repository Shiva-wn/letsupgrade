// variables can be declared locally and globally
//In this we are using two javascript keywords for declaring variables
//1.var :for declaring variables Globally i.e can be accessed anywhere in a javascript program,we use var keyword
//variables declared with var keyword cannot have Block Scope
//i.e cannot be used inside a block
var name ="volvo";
function myfunction()
{
    console.log(name);
}
console.log(name)//will throw an error
//where as when declared inside function we cannot access it on outside of that particular block
function myfunction()
{
    var name="volo"; //can be called a local declaration of variable using var keyword
}

//2.let : "let" variables are block scoped i.e local scoped.
//These variables can be updated but cannot redeclared.
// let city ="Gujrat"
{
    let city="Pune";
    console.log(city); //output:pune
}
console.log(city);//throws error if not declared outside of the block
//let allows you to maintain scope of variables

//const : 'const' keyword is used when we want to give a constant values to variables
//variables declared constant cannot be reassigned.
//if a variable is declared const,its scope is limited to block scope.
{
    const name="Mike";
    const PI=3.14;
    const a = [1,2,3];
    const b ={name: "aloe"};
    name ="joe"; //this will throw an error
}