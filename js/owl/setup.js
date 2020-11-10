$('.owl-carousel').owlCarousel({/* setup do carrosel */
    loop:true,
    margin:10,
    nav:false,/* setas */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})