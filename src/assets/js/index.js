require('bootstrap'); 
let breakpoints = require('./breakpoints.js');
import "../scss/main-styles.scss";


let displayInfo = new require('./display-info.js')();
let displayInfo2 = new require('./display-info.js')();


require('slick-carousel');
require('slick-carousel/slick/slick.scss');
require('slick-carousel/slick/slick-theme.scss');


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

console.log('forEach');
console.log(img.parentNode.parentNode.className);

	// let container = img.parentNode;

	if (img.complete) {
// alert();
		resize(img);

		console.log('if then');

		console.log(' --- resize ---');
		resize(img);



		let onloadClassesOn = img.className.split('js-img-onload-');

		img.className = onloadClassesOn.join(' ');

	// } else img.addEventListener('onload', resize);
	} else{ 
		
		console.log('if else');

		window.addEventListener('load', function(){


			console.log(' ');
			console.log(' --- on load -----------------------');

			console.log(img.parentNode.parentNode.className);

			// console.log(img.style);

			console.log(' ');

			console.log(' --- resize ---');
			resize(img);

			let onloadClassesOn = img.className.split('js-img-onload-');

			img.className = onloadClassesOn.join(' ');

		});
	}

	window.addEventListener('resize', function(){

		function resizeTimeout(){

			resize(img);
		}

		setTimeout(resizeTimeout, 300);
			
	});	



	function resize(img){

			console.log(' ');
			console.log('in resize');

		let container = img.parentNode;

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

// alert(onPoint);

if(onPoint !=='-sm'){

	switch(onPoint){

		case 'sm' :

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

			break;

		case 'md' :	

		case 'lg' :	

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

			break;

		case 'xl' :	

			$testimonialsSlider.slick({
		        dots: true,
		        infinite: true,
		        speed: 1500,
		        slidesToShow: 3,
		        // autoplay: true,
		        autoplaySpeed: 4000,
		        // variableWidth: false,
		        adaptiveHeight: false
		    });


	}
}


$(window).on('breakpoint.changed', 

	()=> {


		if(breakpoints.breakpoint != '-sm'){


			switch(breakpoints.breakpoint){

				case 'sm' :

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

					break;

				case 'md' :	

				case 'lg' :	

// alert('on ' + breakpoints.breakpoint);
					$testimonialsSlider.slick('unslick');
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

					break;
					
				case 'xl' :	

					$testimonialsSlider.slick('unslick');
					$testimonialsSlider.slick({
				        dots: true,
				        infinite: true,
				        speed: 1500,
				        slidesToShow: 3,
				        // autoplay: true,
				        autoplaySpeed: 4000,
				        // variableWidth: false,
				        adaptiveHeight: false
				    });


			}


		}
		else{

			if(breakpoints.breakpoint === '-sm'){


				$testimonialsSlider.slick('unslick');
			}
		}

	});