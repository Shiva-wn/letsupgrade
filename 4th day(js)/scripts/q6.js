console.log("Rewrite function using '?' and '||'");

let p = Number(prompt("Enter number"));

    function rewrite()
    {
        for(i=p;i<100;)
        {
         let res=( p>100) ? `${p}` : Number(prompt("Enter number"));
         console.log(res);
        }
    }

rewrite();