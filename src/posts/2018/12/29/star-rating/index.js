class StarRating {
	constructor() {
		this.printValue('example-one', 'example-one-value');
		this.printValue('example-two', 'example-two-value');
		this.printValue('example-three', 'example-three-value');
		this.printValue('example-four', 'example-four-value');
	}

	printValue(inputId, valueId) {
		let valueElement = document.getElementById(valueId);
		// 1. display the default value (the currently checked input)
		valueElement.innerHTML = document.querySelector(`input[name="${inputId}"]:checked`).value;
		// 2. attach an event handler to all of the possible inputs
		//      to change the displayed value
		let inputs = document.getElementById(inputId).getElementsByTagName('input');
		for (var input of inputs) {
			input.onchange = function () {
				valueElement.innerHTML = this.value;
			}
		}
	}
}

// create new instance when this file is loaded
new StarRating();

console.info('Star Rating loaded');