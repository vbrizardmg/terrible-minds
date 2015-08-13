// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

window.onload=configurer;
function configurer(e){
	document.getElementsByTagName("body")[0].className += " js";
	if($('body').hasClass('js')){

		$(window).on('scroll',gererFixed);

		$('.btplus').on('click',toggleAccordeon); 
		$('#ico-scroll').on('click',descendre);
	}
}

function gererFixed(e){
	$hauteur= $(window).scrollTop();
	$target=$('#comments').offset().top;
	if($hauteur>=$target){
		$('#comments').css("background-attachment","scroll");
	}else{
		$('#comments').css("background-attachment","fixed");
	}
}
function toggleAccordeon(e){
	$row=$(this).parent().parent();
	//console.log($row);
	$($row).next('.info').toggleClass("active");
	$(this).toggleClass("rotated");
	if($($row).next('.info').hasClass("active")){
		$($row).next('.info').children().addClass("animateIn");
		$($row).next('.info').children().removeClass("animateOut");
	}else{
		$($row).next('.info').children().addClass("animateOut");
		$($row).next('.info').children().removeClass("animateIn");
	}	
}
function descendre(e){
	$('body,html').animate({
		scrollTop: $('#comments').offset().top
	},1000,function(){});
}
