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


// window.addEventListener('load', function(){
// let $animationsFirstScreenElems = $('[class*="animations-first-screen-"]');
// alert($animationsFirstScreenElems.length );
// });

	// setInterval(function(){

	// 	displayInfo2.html(timer);		
	// 	// displayInfo2.html(displayInfo2 === displayInfo);		
	// }, 1000 )


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

// console.log(images);

forEach(images, function(img){

// console.log('forEach');
// console.log(img.parentNode.parentNode.className);

	// let container = img.parentNode;

	if (img.complete) {
// alert();
		resize(img);

// console.log('if then');

// console.log(' --- resize ---');
		resize(img);



		let onloadClassesOn = img.className.split('js-img-onload-');

		img.className = onloadClassesOn.join(' ');

	// } else img.addEventListener('onload', resize);
	} else{ 
		
// console.log('if else');

		window.addEventListener('load', function(){


// console.log(' ');
// console.log(' --- on load -----------------------');

// console.log(img.parentNode.parentNode.className);

			// console.log(img.style);

// console.log(' ');

// console.log(' --- resize ---');
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



	function resize(img){

			// console.log(' ');
			// console.log('in resize');

		let container = img.parentNode;
// console.log("img", img);
// console.log("container", container);

// debugger;

// console.log('container.style.width :' + container.style.width);
// console.log('container.offsetWidth :' + container.offsetWidth);
// console.log('container.style.height :' + container.style.height);
// console.log('container.offsetHeight :' + container.offsetHeight);


// console.log('img.offsetWidth');
// console.log(img.offsetWidth);
// console.log('img.offsetHeight');
// console.log(img.offsetHeight);


// console.log('container.offsetWidth / container.offsetHeight');
// console.log( container.offsetWidth + ' / ' + container.offsetHeight);
// console.log( container.offsetWidth / container.offsetHeight);
// console.log('(img.offsetWidth / img.offsetHeight)');
// console.log(img.offsetWidth + ' / ' + img.offsetHeight);
// console.log(img.offsetWidth / img.offsetHeight);

		if ((container.offsetWidth / container.offsetHeight) 
        	< (img.offsetWidth / img.offsetHeight)) {

// console.log("img.style.width = 'auto';");
// console.log("img.style.height ='100%';");

			img.style.width = 'auto';
			img.style.height ='100%';

			// container.style.positon = 'relative';


			// img.style.position = 'absolute';

			// container.style.top = "" + "400px";


			// console.log(img.parentNode.parentNode.className);

			// console.log(img.style.width);
			// console.log(img.offsetWidth);
			// console.log(img.style.height);
			// console.log(img.offsetHeight);

        } else{

// console.log("img.style.width = '100%';");
// console.log("img.style.height = 'auto';");
            img.style.width = '100%';
            img.style.height = 'auto';

			// container.style.positon = 'relative';


			// img.style.position = 'absolute';

			// container.style.left = "" + "400px";


			// console.log(img.style.width);
			// console.log(img.offsetWidth);
			// console.log(img.style.height);
			// console.log(img.offsetHeight);

        }

        return;
	}

});

let $topMenu = $(".top-header-top-menu__icon");
$topMenu.on('click', function(event){
	event.stopPropagation();

	// $topMenu[0].style.transform = "rotate(90deg)";

	$topMenu.toggleClass('active');

});

$(document).on('click', function(e){

	if($topMenu.hasClass('active')){

		$topMenu.removeClass('active');
	}
});


let onPoint = breakpoints.onPoint();

// alert(onPoint);


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


document.addEventListener('DOMContentLoaded', ()=> {

	let $animatedOpacityElems = $('.animated-opacity')
		.removeClass('animated-opacity')
		.addClass('animated');
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
	// console.log($(".btn.read_more"))	;

console.log('===================== ON =================');

	$(".btn.read_more").each(function (){

		// $(this).on('click', $readmoreBtnOnClick);
		this.addEventListener('click', $readmoreBtnOnClick);
		// $(this).on('click', );
// console.log($readmoreBtnOnClick);
// console.log('$(".btn.read_more").on("click", $readmoreBtnOnClick);');
// console.log(this);

		}
	);

	function $readmoreBtnOnClick() {
// alert();
		$(this)
			.closest('.testimonials-slider-slide__text')
			// .find('.testimonials-slider-slide__text')
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
