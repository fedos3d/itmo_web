var before_loadtime = new Date().getTime();
window.onload = function () {
    var aftr_loadtime = new Date().getTime();
    var loadTime = (aftr_loadtime - before_loadtime) / 1000
    if (document.location.href.indexOf("my_portfolio") > -1) {
        var curelem = document.getElementById("portfolio")
        curelem.style.color = "red"
        curelem.style.border = "solid"
    }
    else if (document.location.href.indexOf("index") > -1) {
        var curelem = document.getElementById("home")
        curelem.style.color = "red"
        curelem.style.border = "solid"
    }
    else if (document.location.href.indexOf("my_achievements") > -1) {
        var curelem = document.getElementById("achiv")
        curelem.style.color = "red"
        curelem.style.border = "solid"
    }
    var element = document.createElement("div").appendChild(document.createElement('p').appendChild(document.createTextNode("Load time: " + loadTime)))
    document.body.appendChild(element)
}