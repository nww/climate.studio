/** climate.studio v1.1 | Copyright 2018-2026 Neeley Worldwide Ltd, All Rights Reserved */

window.climateStudioHide = function() {
	const banners = document.getElementsByClassName('climatestudio-globe');
	for (let i = 0; i < banners.length; i++) {
		banners[i].style.display = 'none';
	}
};

(function() {
	console.log("Climate.Studio loaded");

	const css = `
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
    z-index: 2147483647;
    position: fixed;
    cursor: pointer;
    transition: opacity 0.3s ease;
}
.climatestudio-globe:hover,
.climatestudio-globe:focus-within {
    opacity: 0.85;
}
.climatestudio-temperature {
    font-family: "Times New Roman", Georgia, serif;
    letter-spacing: 1px;
    text-shadow: 0px 0px 10px purple;
    font-size: 27px;
    line-height: 1;
    color: white;
    position: absolute;
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
        font-size: 20px;
        margin-top: -10px;
    }
}`;

	const style = document.createElement('style');
	style.appendChild(document.createTextNode(css));
	(document.head || document.getElementsByTagName('head')[0]).appendChild(style);

	// Build widget DOM
	const temp = document.createElement('div');
	temp.className = 'climatestudio-temperature';
	temp.textContent = '+ 2.6\u00B0';

	const globe = document.createElement('div');
	globe.className = 'climatestudio-globe';
	globe.appendChild(temp);

	const link = document.createElement('a');
	link.href = 'https://climate.studio/';
	link.setAttribute('aria-label', 'Climate.Studio \u2014 projected warming +2.6\u00B0C');
	link.appendChild(globe);

	// Preload globe image
	const preload = document.createElement('link');
	preload.rel = 'preload';
	preload.as = 'image';
	preload.href = 'https://code.climate.studio/warming_globe.png';
	(document.head || document.getElementsByTagName('head')[0]).appendChild(preload);

	document.body.appendChild(link);
})();
