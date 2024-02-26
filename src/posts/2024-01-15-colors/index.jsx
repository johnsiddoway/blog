import React, { useCallback, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import './index.scss';
import { useClickOutside } from './_useClickOutside';
import { SwatchPanel } from './_swatch-panel';

/* background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center fixed */

function PopoverPicker({ color, onChange }) {
	const popover = useRef();
	const [isOpen, toggle] = useState(false);

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	return <div className="picker">
		<div
			className="swatch"
			style={{ backgroundColor: color }}
			onClick={() => toggle(true)}
		/>

		{isOpen && (
			<div className="popover" ref={popover}>
				<HexAlphaColorPicker color={color} onChange={onChange} />
			</div>
		)}
	</div>;
}

function ColorPicker({ color, onChange, label }) {
	return <div className="colorPicker">
		<label for={label}>{label}</label>
		<div className="inputGroup">
			<input id={label} value={color} />
			<PopoverPicker color={color} onChange={onChange} />
		</div>
	</div>;
}

function Component() {
	const [foregroundColor, setForegroundColor] = useState("#000");
	const [backgroundColor, setBackgroundColor] = useState("#fff");
	const [primary, setPrimary] = useState('#fff');
	const [secondary, setSecondary] = useState('#777');
	const [tertiary, setTertiary] = useState('#000');

	document.body.style.backgroundColor = backgroundColor;

	return <>
		<div className="pickerPanel">
			<ColorPicker color={foregroundColor} onChange={setForegroundColor} label="Text" />
			<ColorPicker color={backgroundColor} onChange={setBackgroundColor} label="Background" />
			<ColorPicker color={primary} onChange={setPrimary} label="Primary" />
			<ColorPicker color={secondary} onChange={setSecondary} label="Secondary" />
			<ColorPicker color={tertiary} onChange={setTertiary} label="Tertiary" />
		</div>
		<SwatchPanel color={primary} />
	</>;
}

createRoot(document.getElementById('react-root')).render(<Component />);