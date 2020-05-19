$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.main-menu-list').addClass('fixed-header');        
    }
    else {
        $('.main-menu-list').removeClass('fixed-header');      
    }
});