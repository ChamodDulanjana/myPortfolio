
var arrow = document.getElementById('scroll_down_arrow');
var span = document.getElementById('btn_mouse_scroll_id');

span.addEventListener('mouseover', function() {
    // box.style.backgroundColor = 'blue';
    arrow.style.top = '10px';
});

span.addEventListener('mouseout', function() {
    arrow.style.top = '2px';
});



var gitHub = document.getElementById('github');

gitHub.addEventListener('mouseover', function() {
    gitHub.style.color = '#273C75';
});

gitHub.addEventListener('mouseout', function() {
    gitHub.style.color = '#4D6197';
});






var linkedin = document.getElementById('linkedin');

linkedin.addEventListener('mouseover', function() {
    linkedin.style.color = '#273C75';
});

linkedin.addEventListener('mouseout', function() {
    linkedin.style.color = '#4D6197';
});






var twitter = document.getElementById('twitter');

twitter.addEventListener('mouseover', function() {
    twitter.style.color = '#273C75';
});

twitter.addEventListener('mouseout', function() {
    twitter.style.color = '#4D6197';
});