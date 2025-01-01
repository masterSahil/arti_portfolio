// Script for Dropdown Menu

let dropdown = document.querySelector("#dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");

let count = 0;

dropdown.addEventListener("click",() => {
    if (count === 0) {
        dropdownMenu.style.opacity = "1";
        dropdownMenu.style.visibility = "visible";
        dropdownMenu.style.transform = "translateY(0)";
        count = 1;
    } else {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.visibility = "hidden";
        dropdownMenu.style.transform = "translateY(-10vw)";
        count = 0;
    }
});


// Script for Project Navigation

let all = document.querySelector("#all");
let android = document.querySelector("#android");
let flutter = document.querySelector("#flutter");
let web = document.querySelector("#web");

let work = document.querySelector(".work");

let work1 = document.querySelector("#work1");
let work2 = document.querySelector("#work2");
let work3 = document.querySelector("#work3");
let work4 = document.querySelector("#work4");
let work5 = document.querySelector("#work5");
let work6 = document.querySelector("#work6");

let works1 = document.querySelector("#works1");
let works2 = document.querySelector("#works2");
let works3 = document.querySelector("#works3");
let works4 = document.querySelector("#works4");
let works5 = document.querySelector("#works5");
let works6 = document.querySelector("#works6");

let content5 = document.querySelector(".content5");
let content5two = document.querySelector(".content5Two");
let container3 = document.querySelector(".container3");

let activation;

all.addEventListener("click", () =>{
    work1.style.display = "block";
    work2.style.display = "block";
    work3.style.display = "block";
    work4.style.display = "block";
    work5.style.display = "block";
    work6.style.display = "block";

    works1.style.display = "block";
    works2.style.display = "block";
    works3.style.display = "block";
    works4.style.display = "block";
    works5.style.display = "block";
    works6.style.display = "block";

    work1.style.marginLeft = "0";
    work2.style.marginLeft = "0";
    work3.style.marginLeft = "0";
    work4.style.marginLeft = "0";
    work5.style.marginLeft = "0";
    work6.style.marginLeft = "0";

    works1.style.marginLeft = "auto";
    works2.style.marginLeft = "auto";
    works3.style.marginLeft = "auto";
    works4.style.marginLeft = "auto";
    works5.style.marginLeft = "auto";
    works6.style.marginLeft = "auto";

    work1.style.marginRight = "0";
    work2.style.marginRight = "0";
    work3.style.marginRight = "0";
    work4.style.marginRight = "0";
    work5.style.marginRight = "0";
    work6.style.marginRight = "0";

    works1.style.marginRight = "auto";
    works2.style.marginRight = "auto";
    works3.style.marginRight = "auto";
    works4.style.marginRight = "auto";
    works5.style.marginRight = "auto";
    works6.style.marginRight = "auto";

    content5.style.width = "90vw";
    content5two.style.width = "94vw";
    container3.style.flexDirection = "column";

    all.setAttribute("class", "btn3 activateBtn3");
    android.setAttribute("class", "btn3");
    flutter.setAttribute("class", "btn3");
    web.setAttribute("class", "btn3");
});
android.addEventListener("click", () =>{
    work1.style.display = "none";
    work2.style.display = "none";
    work3.style.display = "block";
    work4.style.display = "none";
    work5.style.display = "none";
    work6.style.display = "block";

    works1.style.display = "none";
    works2.style.display = "none";
    works3.style.display = "block";
    works4.style.display = "none";
    works5.style.display = "none";
    works6.style.display = "block";

    content5.style.width = "auto";
    content5two.style.width = "auto";
    container3.style.flexDirection = "row";

    work3.style.marginLeft = "20vw";
    work3.style.marginRight = "2vw";
    work6.style.marginRight = "20vw";

    android.setAttribute("class", "btn3 activateBtn3");
    all.setAttribute("class", "btn3");
    flutter.setAttribute("class", "btn3");
    web.setAttribute("class", "btn3");

    activation = "android";
});
flutter.addEventListener("click", () =>{
    work1.style.display = "block";
    work2.style.display = "none";
    work3.style.display = "none";
    work4.style.display = "none";
    work5.style.display = "block";
    work6.style.display = "none";

    works1.style.display = "block";
    works2.style.display = "none";
    works3.style.display = "none";
    works4.style.display = "none";
    works5.style.display = "block";
    works6.style.display = "none";

    content5.style.width = "auto";
    content5two.style.width = "auto";
    container3.style.flexDirection = "row";

    work1.style.marginLeft = "20vw";
    work1.style.marginRight = "2vw";
    work5.style.marginRight = "20vw";

    flutter.setAttribute("class", "btn3 activateBtn3");
    all.setAttribute("class", "btn3");
    android.setAttribute("class", "btn3");
    web.setAttribute("class", "btn3");

    activation = "flutter";

});
web.addEventListener("click", () =>{
    work1.style.display = "none";
    work2.style.display = "block";
    work3.style.display = "none";
    work4.style.display = "block";
    work5.style.display = "none";
    work6.style.display = "none";

    works1.style.display = "none";
    works2.style.display = "block";
    works3.style.display = "none";
    works4.style.display = "block";
    works5.style.display = "none";
    works6.style.display = "none";

    content5.style.width = "auto";
    content5two.style.width = "auto";
    container3.style.flexDirection = "row";

    work2.style.marginLeft = "20vw";
    work2.style.marginRight = "2vw";
    work4.style.marginRight = "20vw";

    web.setAttribute("class", "btn3 activateBtn3");
    all.setAttribute("class", "btn3");
    android.setAttribute("class", "btn3");
    flutter.setAttribute("class", "btn3");

    activation = "web";

});

if (activation === "android") {
    works3.style.marginRight = "2vw";
} 
else if (activation === "flutter") {
    works1.style.marginRight = "2vw";
}
else if (activation === "web") {
    works2.style.marginRight = "2vw";
}


const mediaQuery = window.matchMedia("(max-width: 1400px)");
function handleMediaQuery(e) {
    const workBoxes = document.querySelectorAll(".work");

    if (e.matches) {
        workBoxes.forEach((box) => {
            box.style.marginRight = "2vw"; 
        });
    } else {
        workBoxes.forEach((box) => {
            box.style.marginRight = "0"; 
        });
    }
}
mediaQuery.addEventListener("change", handleMediaQuery);
handleMediaQuery(mediaQuery);


const target = document.getElementById('target');
    const showThreshold = 5; 

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= showThreshold) {
        target.style.opacity = 1;
      } else {
        target.style.opacity = 0;
      }
    });