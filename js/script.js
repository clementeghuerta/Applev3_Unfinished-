
//1976, arrow scroll down ease
$('a').click(function(){
    $('html, body').animate({scrollTop: '1100px'}, 'slow');
});
// END
console.log("first working");
//section1 start
$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
        $('.left-img').addClass('left-to-right');
}
else {
$('.left-img').removeClass('left-to-right');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
        $('.right-text').addClass('right-to-left-year');
}
else {
$('.right-text').removeClass('right-to-left-year');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 300) {
        $('.right-heading').addClass('right-to-left');
}
else {
$('.right-heading').removeClass('right-to-left');
}
});
//section1 END
// section 2 start

$(window).scroll(function() {
if ($(this).scrollTop() > 1300) {
        $('.left-img2').addClass('left-to-right2');
}
else {
$('.left-img2').removeClass('left-to-right2');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1300) {
        $('.right-text2').addClass('right-to-left-year2');
}
else {
$('.right-text2').removeClass('right-to-left-year2');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1300) {
        $('.right-heading2').addClass('right-to-left2');
}
else {
$('.right-heading2').removeClass('right-to-left2');
}
});
//section2 end
// section 3start

$(window).scroll(function() {
if ($(this).scrollTop() > 2100) {
        $('.left-img3').addClass('left-to-right3');
}
else {
$('.left-img3').removeClass('left-to-right3');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 2100) {
        $('.right-text3').addClass('right-to-left-year3');
}
else {
$('.right-text3').removeClass('right-to-left-year3');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 2100) {
        $('.right-heading3').addClass('right-to-left3');
}
else {
$('.right-heading3').removeClass('right-to-left3');
}
});
//section 3 end
// section 4start

$(window).scroll(function() {
if ($(this).scrollTop() > 3100) {
        $('.left-img4').addClass('left-to-right4');
}
else {
$('.left-img4').removeClass('left-to-right4');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 3100) {
        $('.right-text4').addClass('right-to-left-year4');
}
else {
$('.right-text4').removeClass('right-to-left-year4');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 3100) {
        $('.right-heading4').addClass('right-to-left4');
}
else {
$('.right-heading4').removeClass('right-to-left4');
}
});
//section4 end
// section 5 start

$(window).scroll(function() {
if ($(this).scrollTop() > 4400) {
        $('.left-img5').addClass('left-to-right5');
}
else {
$('.left-img5').removeClass('left-to-right5');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 4400) {
        $('.right-text5').addClass('right-to-left-year5');
}
else {
$('.right-text5').removeClass('right-to-left-year5');
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 4400) {
        $('.right-heading5').addClass('right-to-left5');
}
else {
$('.right-heading5').removeClass('right-to-left5');
}
});
//section5 end
//section 6 start
$(window).scroll(function() {
if ($(this).scrollTop() > 5800) {
        $('.left-img6').addClass('left-to-right6');
}
else {
$('.left-img6').removeClass('left-to-right6');
}
});
//section 6 end
console.log("last working");