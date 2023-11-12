var arrow1 = document.getElementById('view_more_icon1');
var span1 = document.getElementById('view_more_span_id1');

span1.addEventListener('mouseover', function() {
    arrow1.style.left = '10px';
});

span1.addEventListener('mouseout', function() {
    arrow1.style.left = '2px';
});





var arrow2 = document.getElementById('view_more_icon2');
var span2 = document.getElementById('view_more_span_id2');

span2.addEventListener('mouseover', function() {
    arrow2.style.left = '10px';
});

span2.addEventListener('mouseout', function() {
    arrow2.style.left = '2px';
});





var arrow3 = document.getElementById('view_more_icon3');
var span3 = document.getElementById('view_more_span_id3');

span3.addEventListener('mouseover', function() {
    arrow3.style.left = '10px';
});

span3.addEventListener('mouseout', function() {
    arrow3.style.left = '2px';
});



function webDevelopment(){
    var viewMore1 = document.getElementById("pop_up_web");
    if (viewMore1.style.display === "block") {
        viewMore1.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        viewMore1.style.display = 'block';
        document.body.style.overflow = 'hidden';

    }
}


function softwareDevelopment(){
    var viewMore2 = document.getElementById("pop_up_Software");
    if (viewMore2.style.display === "block") {
        viewMore2.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        viewMore2.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}


function uxDevelopment(){
    var viewMore3 = document.getElementById("pop_up_ux");
    if (viewMore3.style.display === "block") {
        viewMore3.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        viewMore3.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}


function closePopUp1(){
    var closePopUp1 = document.getElementById("pop_up_web");
    if (closePopUp1.style.display === "block") {
        closePopUp1.style.display = 'none';
        document.body.style.overflow = 'auto';

    } else {
        closePopUp1.style.display = 'block';

    }
}

function closePopUp2(){
    var closePopUp2 = document.getElementById("pop_up_Software");
    if (closePopUp2.style.display === "block") {
        closePopUp2.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        closePopUp2.style.display = 'block';
    }
}

function closePopUp3(){
    var closePopUp3 = document.getElementById("pop_up_ux");
    if (closePopUp3.style.display === "block") {
        closePopUp3.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        closePopUp3.style.display = 'block';
    }
}


