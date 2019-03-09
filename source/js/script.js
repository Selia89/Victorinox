$(document).ready(function(){

    $('.main__slider').slick({
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
    });

    $('.carusel-slider__block').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 3000,
        arrows: false,
        infinite: true,

        responsive: [{
                breakpoint: 1281,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
			},
			{
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]

    });

    var header = $(".header-descktop"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
		if ( scrolled > 0 ) {
			// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false; // Обнуляем параметр начала скролла вверх
				// Если меню видно
				if ( scrolled < $(".header-descktop").height() + $(".header-descktop").offset().top ) {
					// Если только начали скроллить вниз
					if ( firstScrollDown === false ) {
						var topPosition = $(".header-descktop").offset().top; // Фиксируем текущую позицию меню
						$(".header-descktop").css({
							"top": topPosition + "px"
						});
						firstScrollDown = true;
					}
					// Позиционируем меню абсолютно
					$(".header-descktop").css({
						"position": "absolute"
					});
				// Если меню НЕ видно
				} else {
					// Позиционируем меню фиксированно вне экрана
					$(".header-descktop").css({
						"position": "fixed",
						"top": "-" + $(".header-descktop").height() + "px"
					});
				}
				
			// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
			} else {
				firstScrollDown = false; // Обнуляем параметр начала скролла вниз
				// Если меню не видно
				if ( scrolled > $(".header-descktop").offset().top ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = $(".header-descktop").offset().top; // Фиксируем текущую позицию меню
						$(".header-descktop").css({
							"top": topPosition + "px"
						});
						firstScrollUp = true;
					}
					// Позиционируем меню абсолютно
					$(".header-descktop").css({
						"position": "absolute"
					});
				} else {
					// Убираем все стили
					$(".header-descktop").removeAttr("style");
				}
			}
			// Присваеваем текущее значение скролла предыдущему
			scrollPrev = scrolled;
		}	
	});			

	$( "#slider_price" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
        //Поле минимального значения
        $( "#price" ).val(ui.values[ 0 ]);
        //Поле максимального значения
        $("#price2").val(ui.values[1]); }
        });
        //Записываем значения ползунков в момент загрузки страницы
        //То есть значения по умолчанию
        $( "#price" ).val($( "#slider_price" ).slider( "values", 0 ));
        $("#price2").val($("#slider_price").slider( "values", 1 ));

        $('#price').change(function() {
            var val = $(this).val();
            $('#slider_price').slider("values",0,val);
	});
	
	/*$('.filter__item-wrapper').not(":eq(0)").hide();
	$('.filter__item-head').click(function(){
		$(this).next().slideToggle('slow');
		$(this).toggleClass('active');
	});*/

	var $Slider = $('.slider__window').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: false,
		focusOnSelect: true,
		fade: true,
		cssEase: 'linear',
	  
	  });
	  
	 //card 
	$('.slider__controll-item').on('click', function(e) {
		var slideIndex = $(this).data('item');
		$(this).addClass('on').siblings().removeClass('on');
		$Slider.slick( 'slickGoTo', parseInt( slideIndex ) - 1 );
		e.preventDefault();
	});
	
	$( "#tabs" ).tabs();
	$( "#tabs-kit" ).tabs();

	$('.card__collection-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 3000,
        arrows: false,
        infinite: true,
	});
	
	//стрелки на карточке с цветами
	$('.product__color-block').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
		//arrows: true,
		dots: false,
		infinite: false,
	});

	$('#search-open').click(function(){
        $('.search').css("display", "block");
	});

	$('#search-close').click(function(){
        $('.search').css("display", "none");
	});
	
	$('.adaptive-nav__burger').click(function(){
		$(".header__bottom-block").toggleClass("f-nav");
		$(this).toggleClass("active");
		$(".header").toggleClass("opened");
		$('.header__top-menu-wrapper').slideToggle();
		$('.header__bottom-block-left').slideToggle();
		$(".header__bottom-block").removeClass("f-nav");

		$("body").toggleClass("disabled-scroll");
		
		//$('.header__sub-menu').slideToggle();
	});
	
	$(window).resize(function() {

		if ($(window).width() <= 767) {
			$('.header__sub-menu-item-list-item-sub').hide();
	
			$('.header').removeClass('header-descktop').addClass('header-mobile');
	
			$(window).scroll(function () {
				if ($(this).scrollTop() > 42) {
					$(".header__bottom-block").addClass("f-nav");
				} else {
					$(".header__bottom-block").removeClass("f-nav");
				}
			});
		}
	});

	$('#COMPLAINT').popup();

	$('.victorinox-belarus__slider').slick({
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
    });
	
	$('.faq__section-list').accordion({ 
		collapsible: true,
		active: false
	});

	$('.number__minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.number__plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('#Gallery').popup({
        scrolllock: true,
        transition: 'all 0.2s'
	});
	
	$('.filter__item').accordion({ 
		collapsible: true,
		active: false,
		heightStyle: "content"
	});

	//$('.filter__item:first-child').show();

});