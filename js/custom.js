$(function(){

    //mixitup js
    var containerEl = document.querySelector('.auto-filter');
    var mixer = mixitup(containerEl);


    //venubox js
    $('.venobox').venobox(); 

    // //counter up
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });
});
