
   

   
function principal(){
    let principal = prompt("Enter Principal Amount");
    console.log(principal);
    let timeoryear = prompt("Enter Time/Year");
    console.log(timeoryear);
    let rate = prompt("Enter Rate");
    console.log(rate + "%");
    let amount = principal*((1+rate/100)**timeoryear);
    let ci = amount - principal;
    console.log("C.I = " + ci);
    window.alert("C.I = " + ci);
    document.getElementById("principal").innerHTML = "Principal = " + principal;
    document.getElementById("time").innerHTML = "Time/Year = " + timeoryear;
    document.getElementById("rate").innerHTML = "Rate = " + rate + "%";
}   
