let btn = document.querySelectorAll(".in-circle");
let hoverCircle = document.querySelectorAll(".bg-circle");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseover", function () {
        hoverCircle[i].classList.add("enlarge-circle");
        hoverCircle[i].classList.remove("minimize-circle", "hidden");
    });
    
    btn[i].addEventListener("mouseout", function () {
        hoverCircle[i].classList.add("minimize-circle");
        hoverCircle[i].classList.remove("enlarge-circle");
    });
}