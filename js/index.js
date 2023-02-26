console.log("Your index.js file is loaded correctly!");

/*

$(document).ready(function() {
    $('.loaderAnimationContainer').fadeIn(300).delay(3000).fadeOut(300);	
 });



$(window).load(function(){
    $('.loaderAnimationContainer').fadeIn('slow').delay(3000).fadeOut('slow')});
  
    window.setTimeout(function(){ 
        $("#overlay").css({'z-index':'-100'});
    },3000);



$(document).ready(function() {
    $('.loaderAnimationContainer').css('display', 'none');
    $('.loaderAnimationContainer').fadeOut(3000);
})



setTimeout(function() {
    $('.loaderAnimationContainer').fadeOut();
  }, 3000);





setTimeout(function() {
    $('.loaderAnimationContainer').fadeOut('slow');
}, 3000)

*/

setTimeout(function () {
    $('.loaderAnimationContainer').fadeOut('slow', function(){
        $(this).remove();
    });
}, 3000);




$(document).ready(function() {
    $('.fadeIn1').css('display', 'none');
    $('.fadeIn1').delay('3500').fadeIn(3000);
})

$(document).ready(function() {
    $('.fadeIn2').css('display', 'none');
    $('.fadeIn2').delay('4000').fadeIn(2000);
})

$(document).ready(function() {
    $('.fadeIn3').css('display', 'none');
    $('.fadeIn3').delay('4500').fadeIn(1000);
})

$(document).ready(function() {
    $('.fadeIn4').css('display', 'none');
    $('.fadeIn4').delay('5500').fadeIn(2000);
})

$(document).ready(function() {
    $('.fadeIn5').css('display', 'none');
    $('.fadeIn5').delay('6500').fadeIn(2000);
})

$(document).ready(function() {
    $('.aboutMeSection').css('display', 'none');
    $('.aboutMeSection').fadeIn(3000);
})

$(document).ready(function() {
    $('.graphicDesignPortfolioContainer').css('display', 'none');
    $('.graphicDesignPortfolioContainer').fadeIn(4000);
})


ScrollReveal().reveal('.projectSection', {
    delay: 500,
    easing: 'ease-in',
});

ScrollReveal().reveal('.npoCard', {
    delay: 750,
    distance: '50px'

});

ScrollReveal().reveal('.blmCard', {
    delay: 750,
    distance: '50px'
});

ScrollReveal().reveal('.goalAssistantCard', {
    delay: 750,
    distance: '50px'
});

ScrollReveal().reveal('.trvlCard', {
    delay: 750,
    distance: '50px'
});

ScrollReveal().reveal('.skillsHeader', {
    delay: 250,
    distance: '50px'
});

ScrollReveal().reveal('.skillsCard', {
    delay: 250,
    distance: '50px'
});

ScrollReveal().reveal('.toolsTitleContainer', {
    delay: 250,
    distance: '50px'
});

ScrollReveal().reveal('.toolsCard', {
    delay: 250,
    distance: '50px'
});

