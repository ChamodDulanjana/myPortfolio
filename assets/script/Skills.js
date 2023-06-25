
var img = document.getElementById("btn_skill_down_arrow1");
img.addEventListener('click', () => {
    var i = document.getElementById("div-1");
    if (i.classList.toString() !== "click") {
        i.classList.add("click");
    } else {
        i.classList.remove("click");
    }

});


//
// var img = document.getElementById("btn_skill_down_arrow1");
// img.addEventListener('click', () => {
//     var div = document.getElementById("div-1");
//     if (div.classList.toString() !== "click") {
//         div.classList.add("click");
//     } else {
//         div.classList.remove("click");
//     }
//
// });


/*
var element = document.querySelector('.uil-angle-right-b');
element.addEventListener('mouseover', function() {
    // Code to execute when the mouse pointer enters the element
    element.style.backgroundColor = '#ff0000'; // Change the background color on hover
});
element.addEventListener('mouseout', function() {
    // Code to execute when the mouse pointer leaves the element
    element.style.backgroundColor = '#eaeaea'; // Change the background color back to the original
});*/
