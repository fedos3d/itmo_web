let before_loadtime = new Date().getTime();
window.onload = function () {
    let aftr_loadtime = new Date().getTime();
    let loadTime = (aftr_loadtime - before_loadtime) / 1000
    document.querySelectorAll("[data-nav]").forEach(function(el) {
        if (el.href === document.location.href) {
            el.style.color = "red"
            el.style.border = "solid"
        }
    })
    let textNode = document.createTextNode("Load time: " + loadTime)
    let pNode = document.createElement('p').appendChild(textNode)
    let element = document.createElement("div").appendChild(pNode)
    document.body.appendChild(element)
}