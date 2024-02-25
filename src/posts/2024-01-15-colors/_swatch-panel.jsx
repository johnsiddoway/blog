import React from "react";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";

extend([a11yPlugin]);

const RED = 0.2126;
const GREEN = 0.7152;
const BLUE = 0.0722;

const GAMMA = 2.4;

const AA_CONTRAST_THRESHOLD = 4.5;
const AAA_CONTRAST_THRESHOLD = 7;

function luminance(r, g, b) {
	var a = [r, g, b].map((v) => {
		v /= 255;
		return v <= 0.03928
			? v / 12.92
			: Math.pow((v + 0.055) / 1.055, GAMMA);
	});
	return a[0] * RED + a[1] * GREEN + a[2] * BLUE;
}

function contrast(rgb1, rgb2) {
	var lum1 = luminance(...rgb1);
	var lum2 = luminance(...rgb2);
	return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
}

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
	const a = hsv.a;
	return { r, g, b, a };
}

export function SwatchPanel({ color }) {
	color = colord(color).toHsv();

	const increments = 360 / count; // How far apart should the colors be on the color wheel?

	const swatches = range(count).map((index) => {
		const h = ((index * increments) + color.h) % 360;
		const hsv = { ...color, h };
		const rgb = hsvToRgb(hsv);
		const hex = rgbToHex(rgb);

		const blackContrast = contrast([rgb.r, rgb.g, rgb.b], [0, 0, 0]);

		let style = { backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` }
		if (blackContrast > AAA_CONTRAST_THRESHOLD) {
			style.color = `rgb(0, 0, 0)`;
		} else {
			style.color = `rgb(255, 255, 255)`;
		}

		return <div key={index} className="swatch flex-with-gap" style={style}>
			<div>Angle: {index * increments};</div>
			<div>Hex Code: {hex};</div>
		</div>
	});

	return <div className="swatch-panel">
		{swatches}
	</div>
}