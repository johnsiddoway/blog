import React from 'react';
import { createRoot } from 'react-dom/client';
import { ColorPicker, useColor } from "react-color-palette";
import SwatchPanel from './_swatch-panel.jsx';
import './index.scss';
import "react-color-palette/css";

function Component() {
	const [color, setColor] = useColor("#F16B0E"); // #F10E23

	return <>
		<ColorPicker color={color} onChange={setColor} />
		<SwatchPanel {...{ color }} />
	</>;
}

createRoot(document.getElementById('react-root')).render(<Component />);