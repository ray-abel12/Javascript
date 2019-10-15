function calc() {
    var a = parseInt(document.querySelector("#amount").value);
    var b = parseInt(document.querySelector("#persons").value);

    var calculate = (a * 1.8) + 32;

    document.querySelector("#result").innerHTML = "Total Bills: " + "$" + calculate;
}