function change(){
var recipe = document.getElementById("fruits").value;
switch(recipe){
case "orange":
document.getElementById("demo").innerHTML="your menu is fruit juice";
break;
case "banana":
document.getElementById("demo").innerHTML="your menu is banana bread";
break;
case "kiwi":
document.getElementById("demo").innerHTML="your menu is fruit juice";
break;
case "grape":
 document.getElementById("demo").innerHTML="your menu is grape juice";
break;
default:
document.getElementById("demo").innerHTML="null value";
}
}
