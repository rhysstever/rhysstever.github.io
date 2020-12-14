(function(){
	function calculateScrollYPos(element,pixelOffset){
		let yPos = element.getBoundingClientRect().top;
		offset = (pixelOffset / 890) * window.innerHeight;
		return yPos - offset;
	}

	function backToTopButton(){
		let button = document.querySelector("#backToTopButton");
		if(window.pageYOffset > 0){
			button.style.visibility = "visible";
			
		}else
			button.style.visibility = "hidden";
	}

	window["helper"] = {
        calculateScrollYPos, backToTopButton
    }
})();