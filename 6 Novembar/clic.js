
var cnt = 0;
var button = document.getElementById("button");

button.addEventListener("click", clickHandler);

function clickHandler () {
    var counter = localStorage.getItem("counter");
    if (counter !== "undefined"){
        cnt = counter;
            }

            cnt++;
        
    localStorage.setItem("counter", cnt);
    button.innerText = cnt;
}