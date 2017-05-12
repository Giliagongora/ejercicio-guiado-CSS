var lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.body.scrolltop;
	if (currentScroll>lastScrollTop){
		console.log("down"); //down
	}else{
		console.log("up"); // up
	}
	lastScrollTop = currentScroll; // ignoren esto por ahora
});

document.getElementById("toogle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toogle("open");
	document.getElementById("body").classList.toogle("overflow-hidden");
	})
