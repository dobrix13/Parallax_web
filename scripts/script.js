
window.onload = init;
function init() {

	const sections = document.querySelectorAll("section");
	console.log(sections);
	const navLi = document.querySelectorAll(".navigation a");
	console.log(navLi);
	window.addEventListener("scroll", () => {
		//pass scroll event to the css
		document.body.style.cssText = '--scroolTop: ' + window.scrollY + 'px';


		//get  the Id of the section if section is > 1/3  of height
		let current = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (scrollY >= sectionTop - sectionHeight / 3) {
				current = section.getAttribute("id");
			}
		});

		//toggle active class of the active section
		navLi.forEach((li) => {
			li.classList.remove("active");
			if (li.classList.contains(current)) {
				li.classList.add("active");
			}
			else if (scrollY < 30) { // set active back to home button
				navLi.forEach((li) => {
					li.classList.remove("active");
				})
				navLi[0].classList.add("active");
			}
		});
	});
}