function typeWriter(elementID, text, speed) {
	var textBox = document.getElementById(elementID),
		cursorText = document.createTextNode('_'),
		cursorElement = document.createElement('span'),
		count = 0,
		opacity = 0;
	cursorElement.appendChild(cursorText);
	textBox.parentNode.insertBefore(cursorElement, textBox.nextSibling);
	var timerID = setInterval(function() {
		textBox.innerHTML += text[count];
		count++;
		if (count >= text.length) {
			clearInterval(timerID);
		};
	}, speed);
	setInterval(function() {
		if (opacity === 0) {
			cursorElement.style.opacity = 1;
			opacity = 1;
		} else {
			cursorElement.style.opacity = 0;
			opacity = 0;
		}
	}, 300);
}
//Example
typeWriter('type-1', "console.log('Hello World!');", 100);