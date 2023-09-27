document.addEventListener("mousemove", (e) => {
	const cursor = document.querySelector(".cursor");
	cursor.style.top = e.pageY - 5 + "px";
	cursor.style.left = e.pageX - 5 + "px";
});

const columns = document.querySelectorAll(".column");

document.addEventListener("dragstart", (e) => {
	e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
	e.target.classList.remove("dragging");
});

columns.forEach((item) => {
	item.addEventListener("dragover", (e) => {
		const dragging = document.querySelector(".dragging");
		const applyAfter = getNewPosition(item, e.clientY);

		if (applyAfter) {
			applyAfter.insertAdjacentElement("afterend", dragging);
		} else {
			item.prepend(dragging);
		}
	});
});

function getNewPosition(column, posY) {
	const cards = column.querySelectorAll(".item:not(.dragging)");
	let result;

	for (let refer_card of cards) {
		const box = refer_card.getBoundingClientRect();
		const boxCenterY = box.y + box.height / 2;
		if (posY >= boxCenterY) result = refer_card;
	}

	return result;
}

function addItem(btn) {
	const column = btn.closest(".column");
	const newItem = document.createElement("div");
	newItem.classList.add("item");
	newItem.draggable = true;
	newItem.textContent = prompt("Enter the task:");
	column.appendChild(newItem);

	newItem.addEventListener("dragstart", (e) => {
		e.target.classList.add("dragging");
	});

	newItem.addEventListener("dragend", (e) => {
		e.target.classList.remove("dragging");
	});
}
