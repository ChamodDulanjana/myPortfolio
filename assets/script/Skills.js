




function toggleArrowOne() {
    var arrow1 = document.getElementById("skill_down_arrow_div1");
    var imageDiv1 = document.getElementById("skills_image_id1");
    var div3 = document.getElementById("skills_div-3");
    if (arrow1.style.transform === "rotate(0deg)") {
        arrow1.style.transform = "rotate(-180deg)";
        imageDiv1.style.display = "grid";
        div3.style.transform = "translateY(30px)";
    } else {
        arrow1.style.transform = "rotate(0deg)";
        imageDiv1.style.display = "none";
        div3.style.transform = "translateY(-30px)";
    }
}




function toggleArrowTwo() {
    var arrow2 = document.getElementById("skill_down_arrow_div2");
    var imageDiv2 = document.getElementById("skills_image_id2");
    if (arrow2.style.transform === "rotate(0deg)") {
        arrow2.style.transform = "rotate(-180deg)";
        imageDiv2.style.display = "grid";
    } else {
        arrow2.style.transform = "rotate(0deg)";
        imageDiv2.style.display = "none";
    }
}




function toggleArrowThree() {
    var arrow3 = document.getElementById("skill_down_arrow_div3");
    var imageDiv3 = document.getElementById("skills_image_id3");
    if (arrow3.style.transform === "rotate(0deg)") {
        arrow3.style.transform = "rotate(-180deg)";
        imageDiv3.style.display = "grid";
    } else {
        arrow3.style.transform = "rotate(0deg)";
        imageDiv3.style.display = "none";
    }
}







