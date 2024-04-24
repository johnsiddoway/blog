import React from 'react';
import { createRoot } from 'react-dom/client';

function Component() {
	const [count, setCount] = React.useState(0);
	return <div>
		<p>I've said Vite wrong {count} times today</p>
		<button className="btn-primary" onClick={() => setCount(count + 1)}>Add one</button>
	</div>;
};

createRoot(document.getElementById('react-root')).render(<Component />);