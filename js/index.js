document.getElementById("icd-logo").addEventListener("click", gotoICD)
document.getElementById("icd-name").addEventListener("click", gotoICD)
document.getElementById("icd-sub").addEventListener("click", goto1420)

function gotoICD() {
    window.open("https://benjamintruckenbrod.github.io/Ice-Cream-Dreams/", "_blank")
}

function goto1420() {
    window.open("https://catalog.upp.pitt.edu/preview_course_nopop.php?coid=1101153&catoid=210", "_blank")
}

var slugsss = document.getElementsByClassName("slugss-bandcamp");
for (var i = 0; i < slugsss.length; i++) {
    slugsss[i].addEventListener('click', gotoSlugssBandcamp);
}
document.getElementById("flyer-text").addEventListener("click", gotoFlyer)
document.getElementById("flyer-img").addEventListener("click", gotoFlyer)

function gotoSlugssBandcamp() {
    // document.location.href = 'https://slugss.bandcamp.com/'
    window.open("https://slugss.bandcamp.com/", "_blank")

};

function gotoFlyer() {
    // document.location.href = 'resources/img/slugss-fhw-itit.jpeg'
    window.open("resources/img/slugss-fhw-itit.jpeg", "_blank")

}

document.getElementById("search-engine-img").addEventListener("click", gotoSearchEngineVid)
document.getElementById("search-engine-text").addEventListener("click", gotoSearchEngineVid)
document.getElementById("INFSCI-1560").addEventListener("click", gotoINFSCI1560)

function gotoSearchEngineVid() {
    // document.location.href = 'resources/video/1560-video.mp4'
    window.open("resources/video/1560-video.mp4", "_blank")

}

function gotoINFSCI1560() {
    // document.location.href = 'https://catalog.upp.pitt.edu/preview_course_nopop.php?coid=1142885&catoid=213'
    window.open("https://catalog.upp.pitt.edu/preview_course_nopop.php?coid=1142885&catoid=213", "_blank")

}