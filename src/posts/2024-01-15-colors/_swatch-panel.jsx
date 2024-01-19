import React from 'react';

const count = 12;

const range = (n) => {
	return Array.from({ length: n }, (value, key) => key);
}

const rgbToHex = (rgb) => {
	const toHex = (color) => color.toString(16).padStart(2, '0');
	return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

const hsvToRgb = (hsv) => {
	let hprime = hsv.h / 60;
	const c = (hsv.v / 100) * (hsv.s / 100);
	const x = c * (1 - Math.abs(hprime % 2 - 1));
	const m = (hsv.v / 100) - c;
	let r, g, b;
	if (!hprime) { r = 0; g = 0; b = 0 }
	if (hprime >= 0 && hprime < 1) { r = c; g = x; b = 0 }
	if (hprime >= 1 && hprime < 2) { r = x; g = c; b = 0 }
	if (hprime >= 2 && hprime < 3) { r = 0; g = c; b = x }
	if (hprime >= 3 && hprime < 4) { r = 0; g = x; b = c }
	if (hprime >= 4 && hprime < 5) { r = x; g = 0; b = c }
	if (hprime >= 5 && hprime < 6) { r = c; g = 0; b = x }

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return { r, g, b };
}

export default function SwatchPanel({ color }) {
	const increments = 360 / count; // How far apart should the colors be on the color wheel?

	const swatches = range(count).map((index) => {
		const h = ((index * increments) + color.hsv.h) % 360;
		const hsv = { ...color.hsv, h };
		const rgb = hsvToRgb(hsv);
		const hex = rgbToHex(rgb);

		return <div key={index} className="swatch flex-with-gap" style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}>
			<div>Test {index}</div>
			<div>{index * increments}</div>
			<div>{hex}</div>
		</div>
	});

	return <div>
		{swatches}
	</div>
}