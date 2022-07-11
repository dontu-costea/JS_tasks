window.onload = function() {
	document.body.style.background = "red";	

	function changeBackground() {
		document.body.style.background = "green";	
	}
	setTimeout(changeBackground, 3000)

	let btn = document.createElement('button');
	btn.innerHTML = "Orange";
	document.body.appendChild(btn);
	btn.addEventListener( "click" , () => document.body.style.background = "orange");


	let list = document.createElement('ol');
	document.body.appendChild(list);
	let i = 1;

	let addEllement = setInterval(function() {
		if (i === 20) {
			stopInterval();
		}
		let newItem = document.createElement('li');
		list.appendChild(newItem);
		newItem.innerHTML = `Element Nr ` + i;
		i++;
		if(i % 2 === 0) {
			newItem.style.backgroundColor = "violet";
		} else {
			newItem.style.backgroundColor = "green";
		}
		function stopInterval() {
			clearInterval(addEllement);
		}
		
	}, 2000)
}