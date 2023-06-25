let amount = document.getElementById("amount");
let guest = document.getElementById("guest");
let quality = document.getElementById("quality");
let tipamount = document.getElementById("tip-amount");

calculate = () => {
    let tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
    amount.value = "";
    quality.value = "";
    guest.value = "";
    if (tip === "NaN") {
        tipamount.innerHTML = "Tip $0 each";
        showTipAmount();
    } else {
        tipamount.innerHTML = "Tip $" + tip + " each";
        showTipAmount();
    }
}

showTipAmount = () => {
    let x = tipamount;
    x.className = 'show';
    setTimeout(function() {
        x.className = x.className.replace('show', '');
    }, 3000)
}