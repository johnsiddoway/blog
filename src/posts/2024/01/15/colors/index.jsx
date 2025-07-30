import React, { useCallback, useReducer, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HexColorPicker } from "react-colorful";
import { SwatchPanel } from './_swatch-panel';
import { useClickOutside } from './_useClickOutside';

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
                <HexColorPicker color={color} onChange={onChange} />
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
};

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
    const [{ foregroundColor, backgroundColor, themeColorCount, themeColors }, dispatch] = useReducer(reducer, { foregroundColor: '#000', backgroundColor: '#fff', themeColorCount: 1, themeColors: ['#ff9933'] });

    document.body.style.backgroundColor = backgroundColor;

    const themeColorPickers = [];
    for (let i = 0; i < themeColorCount; i++) {
        themeColorPickers.push(<ColorPicker color={themeColors[i]} label="Theme Color" onChange={(e) => dispatch({ type: 'set-theme-color', index: i, color: e })} />);
    }

    return <>
        <div className="pickerPanel">
            <ColorPicker color={foregroundColor} onChange={(e) => dispatch({ type: 'set-foreground-color', color: e })} label="Text" />
            <ColorPicker color={backgroundColor} onChange={(e) => dispatch({ type: 'set-background-color', color: e })} label="Background" />
            {themeColorPickers}
        </div>
        <SwatchPanel color={themeColors[0]} />
    </>;
}

createRoot(document.getElementById('react-root')).render(<Component />);

// document.body.style.background = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==") left center fixed';