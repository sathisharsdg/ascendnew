$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.main-menu').addClass('fixed-header');        
    }
    else {
        $('.main-menu').removeClass('fixed-header');      
    }
});

//Mega menu custom
 
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    }); 
     
        $(document).ready(function() {
        $(".megamenu").on("click", function(e) {
            e.stopPropagation();
        });
    });
    

