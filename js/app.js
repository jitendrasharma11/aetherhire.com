$('#industries-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('#service-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2
        },
        1000:{
            items:4,
        }
    }
})

$('#testimonial-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

AOS.init();