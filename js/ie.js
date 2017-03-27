$(document).ready(function(){

	$('.slide-baner .slide-item, .parts .parts-block .img, .content .services-block, .products-section .products-item .img, .certification-block .slide a, .partners-section .holder, .gallery a').each(function(e) {
		var bg_ = $(this).find('> img').attr('src');
		$(this).css({
			"background-image" : "none",
			"filter": "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+bg_+"', sizingMethod='scale')"
		});
	});

});
