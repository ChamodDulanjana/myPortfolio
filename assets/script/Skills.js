
var img = document.getElementById("arrow-1");
img.addEventListener('click', () => {
    var div = document.getElementById("div-1");
    if (div.classList.toString() !== "click") {
        div.classList.add("click");
    } else {
        div.classList.remove("click");
    }

});
