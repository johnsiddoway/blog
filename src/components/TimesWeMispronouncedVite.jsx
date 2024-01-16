import React from 'react';

export default function TimesWeMispronouncedVite() {
	const [count, setCount] = React.useState(0);
	return <div>
		<p>I've said Vite wrong {count} times today</p>
		<button className="btn btn-primary" onClick={() => setCount(count + 1)}>Add one</button>
	</div>;
};