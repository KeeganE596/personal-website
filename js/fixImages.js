window.addEventListener('resize', function(){ imageResize(); });
window.addEventListener('load', function(){	imageResize();	});

function imageResize(){
	var w = (window.innerWidth*0.4)*0.33;

	for(var i=0; i<10; i++){
		var img = document.getElementsByClassName("grid-item")[i];
		img.height = w;
	}
}


