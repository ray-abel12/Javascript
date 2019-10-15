var x = prompt("enter time");
function time(){
    if ((x>0) && (x < 12)){
        alert("good morning");
    }else
        if ((x>12) && (x<16)){
            alert("good afternoon");
        }
    else
        if ((x>16) && (x<20)){
            alert("good evening");
    }
else
    if ((x>20) && (x<24)){
        alert("good night");
}
}
time();