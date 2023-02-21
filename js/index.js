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
    $('.fadeIn4').delay('2000').fadeIn(2000);
})

$(document).ready(function() {
    $('.fadeIn5').css('display', 'none');
    $('.fadeIn5').delay('3000').fadeIn(2000);
})

$(document).ready(function() {
    $('.aboutMeSection').css('display', 'none');
    $('.aboutMeSection').fadeIn(3000);
})


ScrollReveal().reveal('.projectSection', {
    delay: 500,
    easing: 'ease-in'
});

ScrollReveal().reveal('.npoCard', {
    delay: 1000,
    distance: '50px'
    
});

ScrollReveal().reveal('.blmCard', {
    delay: 1000,
    distance: '50px'
});

ScrollReveal().reveal('.goalAssistantCard', {
    delay: 1000,
    distance: '50px'
});

ScrollReveal().reveal('.trvlCard', {
    delay: 1000,
    distance: '50px'
});

ScrollReveal().reveal('.skillsHeader', {
    delay: 1000,
    distance: '50px'
});

ScrollReveal().reveal('.skillsCard', {
    delay: 1000,
    distance: '50px'
});

ScrollReveal().reveal('.toolsTitleContainer', {
    delay: 1000,
    distance: '50px'
});

ScrollReveal().reveal('.toolsCard', {
    delay: 1000,
    distance: '50px'
});


