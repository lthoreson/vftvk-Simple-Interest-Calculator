function compute() { // calculates interest to be displayed
    let p = document.getElementById("principal").value; // principal
    let r = document.getElementById("rate").value; // rate
    let t = document.getElementById("years").value; // time
    let int = p*t*r/100; // total interest
    let year = new Date().getFullYear()+parseInt(t); // add input year to current year
    if (p <= 0) { // if user enters 0 or less, display error, and return to principal field
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    // display result message
    document.getElementById("result").innerHTML =
    "If you deposit <mark>"+p+"</mark>,<br/>"+
    "at an interest rate of <mark>"+r+"%</mark>.<br/>"+
    "You will receive an amount of <mark>"+int+"</mark>,<br/>"+
    "in the year <mark>"+year+"</mark>"
}
function updateRate() { // display current slider value
    const r = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = r+"%";
}
        