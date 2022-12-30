const header = document.querySelector("header")

/*sticky scroll*/
window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0)
});

/*sticky scroll style*/
document.addEventListener("scroll", ()=> {
	if (window.scrollY > 800) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled")
	}
});

/*responsive menu*/
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active')
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active')
};




