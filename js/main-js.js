document.getElementById("icd-logo").addEventListener("click", gotoICD)
document.getElementById("icd-name").addEventListener("click", gotoICD)

document.getElementById("pizza").addEventListener("click", gotoFigma)
document.getElementById("pizza-name").addEventListener("click", gotoFigma)

document.getElementById("slugss-ep").addEventListener("click", gotoSlugssEP)
document.getElementById("slugss-ep").addEventListener("click", gotoSlugssEP)


document.getElementById("Sun-Sign").addEventListener("click", gotoSunSign)
document.getElementById("sun-sign-ep").addEventListener("click", gotoSunSign)


document.getElementById("appeal-trailer-text").addEventListener("click", gotoSlugVid)
document.getElementById("appeal-trailer-img").addEventListener("click", gotoSlugVid)

document.getElementById("calculator-text").addEventListener("click", gotoCalc)
document.getElementById("calculator-img").addEventListener("click", gotoCalc)

document.getElementById("flyer-text").addEventListener("click", gotoFlyer)
document.getElementById("flyer-img").addEventListener("click", gotoFlyer)

document.getElementById("search-engine-img").addEventListener("click", gotoSearchEngineVid)
document.getElementById("search-engine-text").addEventListener("click", gotoSearchEngineVid)


function gotoICD() {
    window.open("https://benjamintruckenbrod.github.io/Ice-Cream-Dreams/", "_blank")
}

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

function gotoCalc() {
    window.open("https://benjamintruckenbrod.github.io/Calculator/", "_blank")

}
function gotoFlyer() {
    window.open("resources/img/slugss-fhw-itit.jpeg", "_blank")

}

function gotoSearchEngineVid() {
    window.open("resources/video/1560-video.mp4", "_blank")

}