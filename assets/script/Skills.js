




function toggleArrowOne() {
    var arrow1 = document.getElementById("skill_down_arrow_div1");
    var imageDiv1 = document.getElementById("skills_image_id1");
    var div3 = document.getElementById("skills_div-3");
    var div02 = document.getElementById("skills_div-2");
    if (arrow1.style.transform === "rotate(-180deg)") {
        arrow1.style.transform = "rotate(0deg)";
        imageDiv1.style.display = "none";
        /*div3.style.transform = "translateY(-10px)";*/
        /*div02.style.display = "block";*/
    } else {
        arrow1.style.transform = "rotate(-180deg)";
        imageDiv1.style.display = "grid";
        /*div3.style.transform = "translateY(100px)";*/
        /*div02.style.display = "none";*/
    }
}




function toggleArrowTwo() {
    var arrow2 = document.getElementById("skill_down_arrow_div2");
    var imageDiv2 = document.getElementById("skills_image_id2");
    var div03 = document.getElementById("skills_div-3");
    if (arrow2.style.transform === "rotate(-180deg)") {
        arrow2.style.transform = "rotate(0deg)";
        imageDiv2.style.display = "none";
        /*div03.style.display = "block";*/
    } else {
        arrow2.style.transform = "rotate(-180deg)";
        imageDiv2.style.display = "grid";
        /*div03.style.display = "none";*/
    }
}




function toggleArrowThree() {
    var arrow3 = document.getElementById("skill_down_arrow_div3");
    var imageDiv3 = document.getElementById("skills_image_id3");
    if (arrow3.style.transform === "rotate(-180deg)") {
        arrow3.style.transform = "rotate(0deg)";
        imageDiv3.style.display = "none";
    } else {
        arrow3.style.transform = "rotate(-180deg)";
        imageDiv3.style.display = "grid";
    }
}







