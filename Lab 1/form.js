window.onload = function() {
    document.addEventListener("submit", alertSubFunc);
}

function  alertSubFunc() {
    text = document.getElementById("email").value;
    alert(text);
}