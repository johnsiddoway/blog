import React from 'react';
import { createRoot } from 'react-dom/client';

export function Component() {
	return <div>Hello from React!</div>
}

createRoot(document.getElementById('react-root')).render(<Component />);