// start create button in header 

// get element ul button
let button = document.getElementById("button");

// get Element icon click 
let icon = document.getElementsByClassName("icon")[0];

// get span into icon 
let spIcon = document.getElementsByClassName("spIcon");

// create function click 
icon.onclick = function () {
    if (button.style.getPropertyValue("display") == "" || button.style.getPropertyValue("display") == "none") {
        button.style.display = "block";
        for (let i = 0; i < spIcon.length; i++) {
            spIcon[i].style.background = "red";
        }
    }else {
        button.style.display = "none";
        for (let k = 0; k < spIcon.length; k++) {
            spIcon[k].style.background = "#333";
        }
    }
}

// end create button in header 


// Start scroll to top 

// get element 
let divScroll = document.querySelector(".scroll-to-top");

// onscroll 
window.onscroll = function () {
    if (window.scrollY >= 600) {
        divScroll.style.display = "flex";
    }else {
        divScroll.style.display = "none";
    }
}

// onclick
divScroll.onclick = function () {
    window.scrollTo ({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}

// End scroll to top 


// start setting

// get element setting 
let setting = document.querySelector("#setting-ul");

let alert = document.querySelector(".setting"); // get alert setting 

// get container for filter 
let contain = document.querySelectorAll(".container");

// get loading for filter 
let load = document.querySelector(".loading");

// get scroll to top for escaping filter 
let scTTop = document.querySelector(".scroll-to-top");

setting.onclick = function (e) {
    e.preventDefault();
    
    if (alert.style.getPropertyValue("display") == "" || alert.style.getPropertyValue("display") == "none") {
        alert.style.display = "block";
    }else {
        alert.style.display = "none";
    }

    // for filter and focus on alert 

    for (let p = 0; p < contain.length; p++) {
        contain[p].style.filter = "blur(7px)";
    }
    load.style.filter = "blur(7px)"
    
    alert.style.filter = "blur(0)";
    scTTop.style.filter = "blur(0)";
    // end filter 
    
    button.style.display = "none";
}

// when click on close span 
// get close span 
let closeSt = document.querySelector(".close");

closeSt.addEventListener("click", function () {
    alert.style.display = "none";
    
    // start remove filter 
    for (let y = 0; y < contain.length; y++) {
        contain[y].style.filter = "blur(0)";
    }
    load.style.filter = "blur(0)"
    // end remove filter 
})


// when click on close button 
// get close button 
let closeBtn = document.querySelector("#btn-close");

closeBtn.addEventListener("click", function () {
    alert.style.display = "none";
    
    // start remove filter 
    for (let r = 0; r < contain.length; r++) {
        contain[r].style.filter = "blur(0)";
    }
    load.style.filter = "blur(0)"
    // end remove filter 
})


// start setting content and changes 

// on click span in main color 
// get spans in main color 
let spColor = document.querySelectorAll(".main-color span");

// get all element with main color 
let jMColor = document.querySelectorAll(".js-mainColor");


if (window.localStorage.getItem("color")) {
    scTTop.style.background = window.localStorage.getItem("color");
    closeSt.style.background = window.localStorage.getItem("color");
    closeBtn.style.background = window.localStorage.getItem("color");

    for (let allMain = 0; allMain < jMColor.length; allMain++) {
        jMColor[allMain].style.color = window.localStorage.getItem("color");
    }
    spColor.forEach((li) => {
        li.classList.remove("active");
    });
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}


spColor.forEach((e) => {
    e.onclick = function (a) {
        for (let m = 0; m < spColor.length; m++) {
            spColor[m].classList.remove("active");
        }
        a.target.classList.add("active");

        window.localStorage.setItem("color", a.target.dataset.color);

        for (let allM = 0; allM < jMColor.length; allM++) {
            jMColor[allM].style.color = a.target.dataset.color;
        }

        scTTop.style.background = a.target.dataset.color;
        closeSt.style.background = a.target.dataset.color;
        closeBtn.style.background = a.target.dataset.color;
    }
})


// on click span in second color 
// get spans in second color 
let spColorSe = document.querySelectorAll(".second-color span");

// get all element with second color 
let jSColor = document.querySelectorAll("#js-secondColor");

// get hr line for change background depend on second color 
let line = document.querySelectorAll(".h-line");

if (window.localStorage.getItem("second-color")) {
    for (let h = 0; h < line.length; h++) {
        line[h].style.background = window.localStorage.getItem("second-color");
        line[h].style.borderColor = window.localStorage.getItem("second-color");
    }

    for (let allSecond = 0; allSecond < jSColor.length; allSecond++) {
        jSColor[allSecond].style.color = window.localStorage.getItem("second-color");
    }
    spColorSe.forEach((li) => {
        li.classList.remove("active");
    });

    document.querySelector(`[data-second="${window.localStorage.getItem("second-color")}"]`).classList.add("active");
}

spColorSe.forEach((e) => {
    e.addEventListener("click", function (a) {
        for (let s = 0; s < spColorSe.length; s++) {
            spColorSe[s].classList.remove("active");
        }
        a.target.classList.add("active");

        window.localStorage.setItem("second-color", a.target.dataset.second);

        for (let allS = 0; allS < jSColor.length; allS++) {
            jSColor[allS].style.color = a.target.dataset.second;
        }

        for (let h = 0; h < line.length; h++) {
            line[h].style.background = a.target.dataset.second;
            line[h].style.borderColor = a.target.dataset.second;
        }
    })
})

// on click span in fonts 
// get spans in fonts 
let spFonts = document.querySelectorAll(".fonts span");


if (window.localStorage.getItem("font-family")) {

    document.body.style.fontFamily = window.localStorage.getItem("font-family");
    spFonts.forEach((li) => {
        li.classList.remove("activeF");
    });
    document.querySelector(`[data-font="${window.localStorage.getItem("font-family")}"]`).classList.add("activeF");
}

spFonts.forEach((e) => {
    e.addEventListener("click", function (a) {
        for (let f = 0; f < spFonts.length; f++){
            spFonts[f].classList.remove("activeF");
        }
        a.target.classList.add("activeF");

        window.localStorage.setItem("font-family", a.target.dataset.font);

        document.body.style.fontFamily = a.target.dataset.font;
    })
})

// end setting content and changes 

// when blur out setting make it display none 
alert.onmouseleave = function () {
    alert.style.display = "none";

    // start remove filter 
    for (let time = 0; time < contain.length; time++) {
        contain[time].style.filter = "blur(0)";
    }
    load.style.filter = "blur(0)"
    // end remove filter 
}


// set time out for alert setting 
window.setTimeout(function () {
    alert.style.display = "block";

    // for filter and focus on alert 

    for (let time = 0; time < contain.length; time++) {
        contain[time].style.filter = "blur(7px)";
    }
    load.style.filter = "blur(7px)"
    
    alert.style.filter = "blur(0)";
    scTTop.style.filter = "blur(0)";
    // end filter 

}, 5000)
// end setting 


