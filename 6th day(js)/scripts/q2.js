console.log("Multiplication Table");

var num =Number(prompt("Enter Number","0"));
document.write(`Multiplication tabe of ${num} is :`);

var num = parseInt(num);
var i=0;
document.write('<table border="0" cellspacing="0">');
for (i=1;i<=10;i++)
{
    document.write("<tr><td align='center'>" + num+ " * "+ i + " = " + num*i + "</td></tr>");
}
document.write("</table>");
document.bgColor="Grey";