let before_loadtime = new Date().getTime();
window.onload = function () {
    let aftr_loadtime = new Date().getTime();
    let loadTime = (aftr_loadtime - before_loadtime) / 1000
    if (document.getElementById("portfolio").getAttribute("data-nav") === "true") {
        let curelem = document.getElementById("portfolio")
        curelem.style.color = "red"
        curelem.style.border = "solid"
    }
    else if (document.getElementById("home").getAttribute("data-nav") === "true") {
        let curelem = document.getElementById("home")
        curelem.style.color = "red"
        curelem.style.border = "solid"
    }
    else if (document.getElementById("achiv").getAttribute("data-nav") === "true") {
        let curelem = document.getElementById("achiv")
        curelem.style.color = "red"
        curelem.style.border = "solid"
    }
    let textNode = document.createTextNode("Load time: " + loadTime)
    let pNode = document.createElement('p').appendChild(textNode)
    let element = document.createElement("div").appendChild(pNode)
    document.body.appendChild(element)
}