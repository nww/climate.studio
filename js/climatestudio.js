/** climate.studio v1.0 | Copyright 2018 Neeley Worldwide Ltd, All Rights Reserved */

window.climateStudioHide = function() {
	var banners = document.getElementsByClassName('climatestudio-globe');

	for (var i = 0; i < banners.length; i++) {
		banners[i].style.display = 'none';
	}
};

(function(){

	var MultiString = function(f) {
	  return f.toString().split('\n').slice(1, -1).join('\n');
	}

	console.log("Climate.Studio loaded")

	// Inject CSS
	var css = MultiString(function() {/**
.climatestudio-globe {
    width: 100px;
    height: 200px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    background-image: url("https://code.climate.studio/warming_globe.png");
    background-repeat: no-repeat;
    background-position: right; 
    background-size: 100px 200px;
    top: 50%;
    margin-top: -105px;
    right: 0;
    z-index: 999;
    position: fixed;
}
.climatestudio-temperature {
    font-family: "Times New Roman", Georgia, serif;
    letter-spacing: 1px;
    text-shadow:0px 0px 10px purple;
    font-size:27px;
  	line-height: 1;
    color:white;
    
    position:absolute;
    top: 50%;
    margin-top: -10px;
    right: 6px;
}
@media (max-width: 600px) {
	.climatestudio-globe {
		width: 75px;
		height: 150px;
		border-top-left-radius: 75px;
    	border-bottom-left-radius: 75px;
    	background-size: 75px 150px;
    	margin-top: -78px;
	}
	.climatestudio-temperature {
    	font-size:20px;
    	margin-top: -10px;
	}
}
	**/});
	var head = document.head || document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);

	// todo href="javascript:climateStudioHide()"

	// Inject DIV
	var wrapper = document.createElement('div');
	wrapper.innerHTML = '<a href="https://climate.studio/"><div class="climatestudio-globe"><div class="climatestudio-temperature">+ 1.5°</div></div></a>';
	document.body.appendChild(wrapper);
})();
