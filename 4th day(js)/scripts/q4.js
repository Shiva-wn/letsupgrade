console.log("Performing various Operations");

function showresult(value)
{
    var n1=parseFloat(document.getElementById('num1').value);
    var n2=parseFloat(document.getElementById('num2').value);
    var r;
    var c=choise;

    switch(c)
    {
        case '1' : r=n1+n2;
        break;
        case '2' :r=n1-n2;
        break;
        case '3' :r=n1*n2;
        break;
        case '4' :r=n1/n2;
        break;
        case '5' :r=n1*n1;
        break;
        case '6' :r=n2*100/n1;
        break;
        default:
            break;
    }
    document.getElementById('result').value=r;

}
// showresult(choise);





// let num=prompt("Enter Number");
// let num1=prompt("Enter Number");
// let r
// while(true)
// {
//     if (num+num1)
//     {
//       console.log()
//     }
// }

// var operators = ['+','-','*','/','=','cl'];
// var buffer = '';
// var currentResult=0;
// var currentOperation='';
// function createKeys()
// {
//     for(let i=0;i<10;i++)
//     {
//         let key =document.createElement('div');
//         key.innerHtml = i;
//         key.dataset.value=i;
//         key.className = 'key';

//         document.getElementById('numpad').appendChild(key);
//     }
//     operators.forEach(function(item)
//     {
//         let key=document.createElement('div');
//         key.innerHtml=item;
//         key.dataset.operation=item;
//         key.classname ='key';
//         document.getElementById('operators').appendChild(key);
//     });
//     }
//     window.addEventListener('load',createKeys);

