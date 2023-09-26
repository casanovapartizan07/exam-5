document.addEventListener("mousemove", (e) => {
	const cursor = document.querySelector(".cursor");
	cursor.style.top = e.pageY - 5 + "px";
	cursor.style.left = e.pageX - 5 + "px";
});
