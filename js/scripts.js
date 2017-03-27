$(document).ready(function(){

	$('.parallax').parallax();

	$('.slide-baner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 70000,
		pauseOnDotsHover: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				adaptiveHeight: true
			}
		},
		]
	});

	$('.slide-baner').on('breakpoint', function(event, slick, currentSlide, nextSlide, breakpoint){
		$('.slide-baner .slide-item').each(function() {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
		});
	});

	$('.slide-about').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		fade: true,
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				adaptiveHeight: true
			}
		},
		]
	});

	$('.slide-baner .slide-item, .parts .parts-block .img, .content .services-block, .products-section .products-item .img, .certification-block .slide a, .partners-section .holder, .gallery a').each(function() {
		$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
	});

	$('.go-down').click(function(e){
		var scrollhere = $(this).parent('.baner').next().offset().top - $('#header').outerHeight();
		$('html,body').stop().animate({
			scrollTop: scrollhere
		}, 500);
		return false;
	});

	$('.input-number .next').click(function() {
		$(this).siblings('input').val(function(i, oldval) {
			if(oldval == $(this).attr('placeholder')){
				return '1';
			} else {
				return ++oldval;
			}
		});
		return false;
	});


	$('.input-number .prev').click(function() {
		$(this).siblings('input').val(function(i, oldval) {
			if (oldval > 1 ) {
				if(oldval == $(this).attr('placeholder')){
					return '-1';
				} else {
					return --oldval;
				}
			} else {
				return '1';
			};
		});
		return false;
	});

	$('.input-number input').keypress(function (e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		$("#errmsg").html("Digits Only").show().fadeOut("slow");
			return false;
		}
	});

	$('.cart-info .btn-remove').click(function() {
		$(this).parents('tr').remove();
		return false;
	});

	$('#main-nav > ul > li').has('ul').each(function () {
		$('<span class="opener"/>').prependTo(this);
	});
	$('#main-nav > ul li').has('ul').addClass('has-drop');
	$('#main-nav .opener').click(function(){
		if ($(this).parent().hasClass('current')) {
			$(this).parent().removeClass('current').children('ul').slideUp(300);
		} else{
			$(this).parent().addClass('current').children('ul').slideDown(300);
			$(this).parent().siblings('.current').removeClass('current').children('ul').slideUp(300);
		};
	});


	$('<a href="#" class="open-menu">Open Menu</a>').prependTo('#header');
	$('<span class="fader"/>').appendTo('#header');
	$('.open-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').click(function(){
		$('body').removeClass('menu-opened');
	});

	function mapInitialize(map_) {
		var coords_ = $('#'+ map_).data('coords');
			if (coords_){
				var latitude = coords_.split(',')[0];
				var longtitude = coords_.split(',')[1];
			}
			
		var iconBase = 'images/map-marker.png';

		var latlng = new google.maps.LatLng(latitude,longtitude);
		
		var myOptions = {
			center: latlng,
			scrollwheel: false,
			zoom: 14,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			disableDoubleClickZoom: true
		};
		
		var map = new google.maps.Map(document.getElementById(map_), myOptions);
		
		var stylesBW = [
			{
				featureType: "all",
				stylers: [
					{ saturation: -100 }
				]
			}
		];

		map.setOptions({styles: stylesBW});

		var marker = new google.maps.Marker({
			position: latlng,
			icon: iconBase,
			map: map
		});
	
	};
	$('.map').each(function(){
		var map_ = $(this).attr('id');
		mapInitialize(map_);
	});


	$('.certification-block .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		},
		]
	});
	
	$('.partners-section .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		rows: 3,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1
			}
		},
		]
	});

	$(document).on('change', ':file', function() {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});

	$(':file').on('fileselect', function(event, numFiles, label) {
		var input = $(this).parents('.form-file').find(':text'),
		log = numFiles > 1 ? numFiles + ' files selected' : label;
		if( input.length ) {
			input.val(log);
		} else {
			if( log ) alert(log);
		}
	});

	$('.fancybox').fancybox();

});
