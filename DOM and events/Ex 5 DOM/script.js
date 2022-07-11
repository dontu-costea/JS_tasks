let lessButton = document.getElementById('less');
let moreButton = document.getElementById('more');
let input = document.getElementById('input');
input.value = 5;

lessButton.onclick = function() {
	input.value--;
	if (input.value < 1) {
		lessButton.disabled = true;
	} 
	moreButton.disabled = false;
}

moreButton.onclick = function() {
	input.value++;
	if (input.value > 8) {
		moreButton.disabled = true;
	}
	lessButton.disabled = false;
}