
   
function principal(){
    let principal = prompt("Enter Principal Amount");
    console.log(principal);
    let timeoryear = prompt("Enter Time/Year");
    console.log(timeoryear);
    let rate = prompt("Enter Rate");
    console.log(rate + "%");
    let amount = principal*((1+rate/100)**timeoryear);
    console.log("amount = " + amount);
    window.alert("amount = " + amount);
}
