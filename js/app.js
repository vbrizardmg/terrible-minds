// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

window.onload=configurer;
function configurer(e){
	document.getElementsByTagName("body")[0].className += " js";
	if($('body').hasClass('js')){


		//console.log($('#order').offset());
		$(document).scroll(parallaxPrix);
			
		// $(document).scroll(function(){

		// var x = $(this).scrollTop();
		// console.log(x);
		// $('#bg-prix').css('background-position','0% '+parseInt(-x/10)+'px');
		// });

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

function parallaxPrix(e){
		var scrolled=$(this).scrollTop();
		var target=$('#bg-parallax1').offset().top;


		$('#bg-parallax1').css('top',(300-((scrolled)*.25))+'px');
}