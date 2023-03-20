window.addEventListener('scroll', ()=> {
	document.body.style.cssText = '--scroolTop: '+ window.scrollY +'px';
	console.log(window.scrollY)
});