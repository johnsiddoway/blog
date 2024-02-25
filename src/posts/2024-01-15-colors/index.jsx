import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import './index.scss';
import { SwatchPanel } from './_swatch-panel';

/* background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center fixed */

function ColorPicker({ color, onChange, label }) {
	return <>
		<h2>{label}</h2>
		<HexAlphaColorPicker color={color} onChange={onChange} />
		<HexColorInput color={color} onChange={onChange} prefixed alpha />
	</>;
}

function Component() {
	const [primary, setPrimary] = useState('#fff');
	const [secondary, setSecondary] = useState('#777');
	const [tertiary, setTertiary] = useState('#000');

	document.body.style.backgroundColor = primary;

	return <>
		<div>
			<ColorPicker color={primary} onChange={setPrimary} label="Primary" />
			<ColorPicker color={secondary} onChange={setSecondary} label="Secondary" />
			<ColorPicker color={tertiary} onChange={setTertiary} label="Tertiary" />
		</div>
		<SwatchPanel color={primary} />
	</>;
}

createRoot(document.getElementById('react-root')).render(<Component />);