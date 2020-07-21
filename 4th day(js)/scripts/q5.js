console.log("Employee sales");

let s=Number(prompt("Enter total no of Sales"));
let r;
switch (true) {
    case (s>=0 && s<=5000):
                           r=s+s*0.02;
                           console.log(`Total Commission earned is ${r} `);
        
                           break;
     case (s>=5001 &&s<=10000):
                             r=s+s*0.05;
                              console.log(`Total Commission earned is ${r} `);

                             break;
    case (s>=10001 &&s<=20000):
                               r=s+s*0.07;
                              console.log(`Total Commission earned is ${r} `);
                              break;
    case (s>=20000):
                     r=s+s*0.10;
                     console.log(`Total Commission earned is ${r} `);
                     break;

    default:
        break;
}

