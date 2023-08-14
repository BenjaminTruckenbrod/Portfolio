document.getElementById("icd-logo").addEventListener("click", gotoICD)
document.getElementById("icd-name").addEventListener("click", gotoICD)
// document.getElementById("icd-sub").addEventListener("click", goto1420)

document.getElementById("pizza").addEventListener("click", gotoFigma)
document.getElementById("pizza-name").addEventListener("click", gotoFigma)
// document.getElementById("pizza-sub").addEventListener("click", goto1420)

// var slugsss = document.getElementsByClassName("slugss-bandcamp");
// for (var i = 0; i < slugsss.length; i++) {
//     slugsss[i].addEventListener('click', gotoSlugssBandcamp);
// }

document.getElementById("slugss-ep").addEventListener("click", gotoSlugssEP)
document.getElementById("slugss-ep").addEventListener("click", gotoSlugssEP)


document.getElementById("Sun-Sign").addEventListener("click", gotoSunSign)
document.getElementById("sun-sign-ep").addEventListener("click", gotoSunSign)


document.getElementById("appeal-trailer-text").addEventListener("click", gotoSlugVid)
document.getElementById("appeal-trailer-img").addEventListener("click", gotoSlugVid)

document.getElementById("calculator-text").addEventListener("click", gotoCalc)
document.getElementById("calculator-img").addEventListener("click", gotoCalc)
// document.getElementById("TOP").addEventListener("click", gotoTOP)

document.getElementById("flyer-text").addEventListener("click", gotoFlyer)
document.getElementById("flyer-img").addEventListener("click", gotoFlyer)

document.getElementById("search-engine-img").addEventListener("click", gotoSearchEngineVid)
document.getElementById("search-engine-text").addEventListener("click", gotoSearchEngineVid)
// document.getElementById("INFSCI-1560").addEventListener("click", gotoINFSCI1560)


function gotoICD() {
    window.open("https://benjamintruckenbrod.github.io/Ice-Cream-Dreams/", "_blank")
}

// function goto1420() {
//     window.open("https://catalog.upp.pitt.edu/preview_course_nopop.php?coid=1101153&catoid=210", "_blank")
// }

function gotoFigma() {
    window.open("https://www.figma.com/file/u63j9vw0OUTUmVBfF2QS41/Streaming-Tower-of-Pizza-Project?type=design&node-id=430-2&mode=design", "_blank")

}

function gotoSlugssEP() {
    window.open("resources/img/slugss_ep.jpeg", "_blank")

}

function gotoSunSign() {
    window.open("resources/img/sun-sign-ep.jpeg", "_blank")

}

function gotoSlugVid() {
    window.open("https://www.instagram.com/p/Bjh4aaegXFg/", "_blank")

}

// function gotoSlugssBandcamp() {
//     window.open("https://slugss.bandcamp.com/", "_blank")

// };

function gotoCalc() {
    window.open("https://benjamintruckenbrod.github.io/Calculator/", "_blank")

}

// function gotoTOP() {
//     window.open("https://www.theodinproject.com/lessons/foundations-calculator", "_blank")

// }

function gotoFlyer() {
    window.open("resources/img/slugss-fhw-itit.jpeg", "_blank")

}

function gotoSearchEngineVid() {
    window.open("resources/video/1560-video.mp4", "_blank")

}

// function gotoINFSCI1560() {
//     window.open("https://catalog.upp.pitt.edu/preview_course_nopop.php?coid=1142885&catoid=213", "_blank")

// }