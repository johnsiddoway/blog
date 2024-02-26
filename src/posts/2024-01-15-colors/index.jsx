import React, { useCallback, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";
import './index.scss';
import { useClickOutside } from './_useClickOutside';
import { SwatchPanel } from './_swatch-panel';

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
			<input id={label} value={color} onChange={(e) => onChange(e.target.value)} />
			<PopoverPicker color={color} onChange={onChange} />
		</div>
	</div>;
}

type Action =
	| { type: 'set-foreground-color', color: string }
	| { type: 'set-background-color', color: string }
	| { type: 'set-theme-color', index: number, color: string }
	| { type: 'set-theme-color-count', count: number };
type State = {
	foregroundColor: string;
	backgroundColor: string;
	themeColorCount: number;
	themeColors: string[];
}
function reducer(state, action) {
	switch (action.type) {
		case 'set-foreground-color':
			return {
				...state,
				foregroundColor: action.color,
			};
		case 'set-background-color':
			return {
				...state,
				backgroundColor: action.color,
			};
		case 'set-theme-color':
			return {
				...state,
				themeColors: state.themeColors.map((color, index) => {
					if (index == action.index) {
						return action.color;
					} else {
						return color;
					}
				}),
			};
		case 'set-theme-color-count':
			return {
				...state,
				themeColorCount: action.count,
			};
		default:
			return state;
	}
};

function Component() {
	const [{ foregroundColor, backgroundColor, themeColorCount, themeColors }, dispatch] = useReducer(reducer, { foregroundColor: '#292521', backgroundColor: '#fff', themeColorCount: 1, themeColors: ['#daa520'] });

	document.body.style.backgroundColor = backgroundColor;

	const themeColorPickers = [];
	for (i = 0; i < number; i++) {
		themeColorPickers.push(<ColorPicker color={themeColors[i]} onChange={(e) => dispatch({ type: 'set-theme-color', index: i, color: e })} />);
	}

	return <>
		<div className="pickerPanel">
			<ColorPicker color={foregroundColor} onChange={(e) => dispatch({ type: 'set-foreground-color', color: e })} label="Text" />
			<ColorPicker color={backgroundColor} onChange={(e) => dispatch({ type: 'set-background-color', color: e })} label="Background" />
			<select name="count" id="count" onChange={(e) => dispatch({ type: 'set-theme-color-count', count: e.target.value })}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			{themeColorPickers}
		</div>
		<SwatchPanel color={primary} />
	</>;
}

createRoot(document.getElementById('react-root')).render(<Component />);

// document.body.style.background = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center fixed';