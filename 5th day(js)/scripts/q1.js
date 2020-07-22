console.log("Array of numbers");

let num =Number(prompt("Enter Number"));
let n;
if(num < 0)
{
    alert("Enter positive number");

}
else
{
    console.log(`Entered Number is : ${num}`);
    //Array of Numbers
    var arr=new Array();
    for (i=1;i<=num;i++)
    var x;
    {
        var arr1=Array.from(Array(num),(x,i)=> i+1);
        for(i=1;i<=num;i++)
        {
            n=console.log(arr.fill(Array[i])) ;

            // console.log(arr1[i]);
        }
        let odd=arr1.filter(el => el%2!=0)
        console.log(odd);
        let cube=odd.map(el => el**3);
        console.log(`Cube of Filtered Numbers ${cube}`);
    }
}
// n=console.log(arr.fill(Array[i])) ;
