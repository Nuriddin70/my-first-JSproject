"use stricts";

let screen = document.querySelector(".screen"),
  

document.querySelectorAll("td").forEach(function (td) {
  td.addEventListener("click", function (e) {
    let belgi = e.target.innerText;
    if (belgi == "C") {
      screen.value = "";
    } else if (belgi == "=") {
      screen.value = eval(screen.value);
    } else {
      screen.value += belgi;
    }
  });
});
