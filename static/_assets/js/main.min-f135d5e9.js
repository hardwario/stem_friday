$(function(){

    $('.js-formenu').click(function(){
        $('.js-menu').toggleClass('d-none')
    })

    $(window).resize(function(){
        $('.js-menu').addClass('d-none')
    });

    $(".collapsor__item").length > 0 && $(".collapsor__item").each(function() {
        var e = $(this);
        e.find(".collapsor__header").click(function() {
            e.siblings().find(".collapsor__body").slideUp(function() {
                $(this).parents(".collapsor__item").find(".collapsor__header").removeClass("collapsor__header--active"), $(this).removeClass("collapsor__body--active")
            }), $(this).toggleClass("collapsor__header--active"), e.find(".collapsor__body").slideToggle(function() {
                $(this).toggleClass("collapsor__body--active")
            })
        })
      });

      $(window).resize(function(){

        if($('.sticky').length>0 && $(window).width()>1199) {
            var top = $('.sticky').offset().top;
            var paddingBody = parseInt($('body').css('padding-top'));

            $(window).scroll(function () {
                if ($(window).scrollTop() > top) {
                    $('.sticky').addClass('sticky--scroll');
                    $('body').css('padding-top',paddingBody+parseInt($('.sticky').height())+'px');
                }
                else {
                    $('.sticky').removeClass('sticky--scroll');
                    $('body').css('padding-top',paddingBody+'px');
                }

                var hMin = $('#top').offset().top-100;
                var hMax = parseInt($('#top').offset().top)+parseInt($('#top').outerHeight())-100;
                if($(window).scrollTop()>=hMin && $(window).scrollTop()<=hMax)
                {
                    $('.sticky-top').addClass('active');
                }
                else
                {
                    $('.sticky-top').removeClass('active');
                }

                var hMin = $('#how').offset().top-100;
                var hMax = parseInt($('#how').offset().top)+parseInt($('#how').outerHeight())-100;
                if($(window).scrollTop()>=hMin && $(window).scrollTop()<=hMax)
                {
                    $('.sticky-how').addClass('active');
                }
                else
                {
                    $('.sticky-how').removeClass('active');
                }

                var hMin = $('#pricelist').offset().top-100;
                var hMax = parseInt($('#pricelist').offset().top)+parseInt($('#pricelist').outerHeight())-100;
                if($(window).scrollTop()>=hMin && $(window).scrollTop()<=hMax)
                {
                    $('.sticky-pricelist').addClass('active');
                }
                else
                {
                    $('.sticky-pricelist').removeClass('active');
                }

                var hMin = $('#meeting').offset().top-100;
                var hMax = parseInt($('#meeting').offset().top)+parseInt($('#meeting').outerHeight())-100;
                if($(window).scrollTop()>=hMin && $(window).scrollTop()<=hMax)
                {
                    $('.sticky-meeting').addClass('active');
                }
                else
                {
                    $('.sticky-meeting').removeClass('active');
                }

            }).scroll();
        }
    }).resize();
});
