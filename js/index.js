console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    $('.fadeIn1').css('display', 'none');
    $('.fadeIn1').fadeIn(3000);
})

$(document).ready(function() {
    $('.fadeIn2').css('display', 'none');
    $('.fadeIn2').delay('500').fadeIn(2000);
})

$(document).ready(function() {
    $('.fadeIn3').css('display', 'none');
    $('.fadeIn3').delay('1000').fadeIn(1000);
})

$(document).ready(function() {
    $('.fadeIn4').css('display', 'none');
    $('.fadeIn4').delay('2500').fadeIn(2000);
})

$(document).ready(function() {
    $('.fadeIn5').css('display', 'none');
    $('.fadeIn5').delay('3000').fadeIn(2000);
})

ScrollReveal().reveal('.npoCard', {delay: 500}, {easing: 'ease-in'}, {duration: 2000});

ScrollReveal().reveal('.blmCard', {delay: 500});

ScrollReveal().reveal('.goalAssistantCard', {delay: 500});

ScrollReveal().reveal('.trvlCard', {delay: 500});

