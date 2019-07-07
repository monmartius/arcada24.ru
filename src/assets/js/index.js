require('bootstrap'); 
let breakpoints = require('./breakpoints.js');
import "../scss/main-styles.scss";
let wow = require('wowjs');

let displayInfo = new require('./display-info.js')();
let displayInfo2 = new require('./display-info.js')();


require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');




let imageOnload = document.querySelector('#image-onload');

imageOnload.addEventListener('load', () => {

	console.log('image.load');
	
});

window.addEventListener('load', ()=>{

	console.log('window.load');
});






new wow.WOW().init();

	displayInfo.html('size: ' + breakpoints.onPoint() + '<br>'+ breakpoints.windowSizePx().widthHeight);

	displayInfo.css({

		'background-color': 'rgba(255, 0, 0, .6)',
		'color': 'white',
		'right': '20px',
		'width' : '160px',
		'bottom' : 30,
		// 'bottom' : '0',
		'font-size' : '12px',
	});


 	displayInfo2.css({

		'background-color': 'rgba(255, 255, 0, .6)',
		'color': 'white',
		'right': '20px',
		'width' : '160px',
		'top' : 30,
		// 'left' : 30,
		'font-size' : '12px',
	});



	$(window).on('resize', function(){

		let width = breakpoints.windowSizePx().width;
		let height = breakpoints.windowSizePx().height;

		displayInfo.html('size: ' + breakpoints.onPoint() 
			+ '<br>'+ breakpoints.windowSizePx().widthHeight 
			+ '<br>aspect-ratio: ' + width + '/' + height
			+ ' : ' + Math.round( width/height*100)/100 + "");
	});


function forEach(obj, func){

	for(let i = 0; i < obj.length; i++){

		func(obj[i]);
	}
}

let images = document.querySelectorAll('img.js-img-cover');



forEach(images, function(img){

	if (img.complete) {

		resize(img);


		let onloadClassesOn = img.className.split('js-img-onload-');

		img.className = onloadClassesOn.join(' ');


	} else{ 
		


		window.addEventListener('load', function(){


			resize(img);

			let onloadClassesOn = img.className.split('js-img-onload-');

			img.className = onloadClassesOn.join(' ');

		});
	}

	window.addEventListener('resize', function(){

		resize(img);

		function resizeTimeout(){

			resize(img);
		}

		setTimeout(resizeTimeout, 1000);
			
	});	



});



function resize(img){


	let container = img.parentNode;


	if ((container.offsetWidth / container.offsetHeight) 
    	< (img.offsetWidth / img.offsetHeight)) {



		img.style.width = 'auto';
		img.style.height ='100%';



    } else{

        img.style.width = '100%';
        img.style.height = 'auto';

    }

    return;
}

// class NodesArray 

class NodeArray extends Array {

    constructor(nodeList) { 

    	super(); 

        for(let i = 0; i < nodeList.length; i++){

        	this[i] = nodeList[i];
        }
    }

    last() {
        return this[this.length - 1];
    }
}



function querySelectorAllToArray(selector) {

	let nodeList = document.querySelector('body').querySelectorAll(selector);

	let nodeArray = new NodeArray(nodeList);

	return nodeArray;
}




document.addEventListener('DOMContentLoaded', ()=> {
	
	let firstLoadImages = querySelectorAllToArray('img[data-src-first]');
	let otherLoadImages = querySelectorAllToArray('img[data-src-other]');

	firstLoadImages.forEach((image) => {

		image.src = image.getAttribute('data-src-first');

		console.log("img.className", image.className.indexOf('js-img-cover'));

		if (image.className.indexOf('js-img-cover') + 1){

			image.addEventListener('load', ()=>{

				resize(image);
			});
		}

	});

	otherLoadImages.forEach((image) => {

		image.src = image.getAttribute('data-src-other');


	});
	

	// let imagesElements = document.querySelectorAll('img[data-src]');


	// console.log("imagesElements", imagesElements);

	// console.log("imagesElements", imagesElements.querySelectorAll('img[data-firstload]'));

	// let $animatedOpacityElems = $('.animated-opacity')
	// 	.removeClass('animated-opacity')
	// 	.addClass('animated');
});


















let $topMenu = $(".top-header-top-menu__icon");
$topMenu.on('click', function(event){
	event.stopPropagation();

	$topMenu.toggleClass('active');

});

$(document).on('click', function(e){

	if($topMenu.hasClass('active')){

		$topMenu.removeClass('active');
	}
});


















let onPoint = breakpoints.onPoint();


let $testimonialsSlider = $('.testimonials-slider');







if(onPoint !=='-sm'){

	switch(onPoint){

		case 'sm' :

			// $testimonialsSlider.slick({
		 //        dots: true,
		 //        infinite: true,
		 //        speed: 1500,
		 //        slidesToShow: 1,
		 //        // autoplay: true,
		 //        autoplaySpeed: 4000,
		 //        // variableWidth: false,
		 //        adaptiveHeight: false
		 //    });

			// break;

		case 'md' :	

		case 'lg' :	

			$testimonialsSlider.data('slickSliderOn', true);

			$testimonialsSlider.slick({
		        dots: false,
		        infinite: true,
		        speed: 1500,
		        slidesToShow: 1,
		        // autoplay: true,
		        autoplaySpeed: 4000,
		        // variableWidth: false,
		        adaptiveHeight: false
		    });

			break;

		case 'xl' :	

			$testimonialsSlider.data('slickSliderOn', true);
			$testimonialsSlider.slick({
		        dots: true,
		        infinite: true,
		        speed: 1500,
		        slidesToShow: 2,
		        // autoplay: true,
		        autoplaySpeed: 4000,
		        // variableWidth: false,
		        adaptiveHeight: false
		    });


	}

}
else{

	$testimonialsSlider.data('slickSliderOn', false);
}



$(window).on('breakpoint.changed', 

	()=> {

		readmoreBtnRemove();
		readmoreBtnInit();


		if(breakpoints.breakpoint != '-sm'){


			switch(breakpoints.breakpoint){

				case 'sm' :

					// $testimonialsSlider.slick({
				 //        dots: true,
				 //        infinite: true,
				 //        speed: 1500,
				 //        slidesToShow: 1,
				 //        // autoplay: true,
				 //        autoplaySpeed: 4000,
				 //        // variableWidth: false,
				 //        adaptiveHeight: false
				 //    });

					// break;

				case 'md' :	

				case 'lg' :	

// alert('on ' + breakpoints.breakpoint);

					if($testimonialsSlider.data('slickSliderOn')){

						$testimonialsSlider.slick('unslick');
					}

					$testimonialsSlider.slick({
				        dots: true,
				        infinite: true,
				        speed: 1500,
				        slidesToShow: 1,
				        // autoplay: true,
				        autoplaySpeed: 4000,
				        // variableWidth: false,
				        adaptiveHeight: false
				    });

					$testimonialsSlider.data('slickSliderOn', true);

					break;

					
				case 'xl' :	

					if($testimonialsSlider.data('slickSliderOn')){

						$testimonialsSlider.slick('unslick');
					}

					$testimonialsSlider.slick({
				        dots: true,
				        infinite: true,
				        speed: 1500,
				        slidesToShow: 2,
				        // autoplay: true,
				        autoplaySpeed: 4000,
				        // variableWidth: false,
				        adaptiveHeight: false
				    });

					$testimonialsSlider.data('slickSliderOn', true);

			}


		}
		else{

			if(breakpoints.breakpoint === '-sm'){

				if($testimonialsSlider.data('slickSliderOn')){

					$testimonialsSlider.slick('unslick');
					$testimonialsSlider.data('slickSliderOn', false);
				}
			}
		}

	});



readmoreBtnInit();

function readmoreBtnInit(){


	let $sliderTextElements = $('.testimonials-slider-slide__text');


	$sliderTextElements.each(function(){

		var textFull = $(this).html();

		var textElipsis = textFull;

		if( textElipsis.length > 200 )
		{
			textElipsis = textElipsis.substring(0, 200) + '...';

			$(this).html(textElipsis + '<dic class = "btn-read_more-wrapper"><div class="btn read_more">читать полностью &rarr;</div></div>' );
		}

		$(this).find('.btn-read_more-wrapper').append('<div class="full_text" style="display: none;">' + textFull + '</div>');
	});

	$(".btn.read_more").each(function (){


		this.addEventListener('click', $readmoreBtnOnClick);

		}
	);

	function $readmoreBtnOnClick() {

		$(this)
			.closest('.testimonials-slider-slide__text')

			.html(
				$(this).parent()
				.find(".full_text")
				.html() 
			);
	}
}



function readmoreBtnRemove(){

	let $sliderTextElements = $('.testimonials-slider-slide__text');

	$sliderTextElements.each(function(){

		let $sliderTextElement = $(this);

		let $textFull = $('.full_text', $sliderTextElement).html();

		$sliderTextElement.html($textFull);

	});
}
