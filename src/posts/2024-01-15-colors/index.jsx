import React from 'react';
import ReactDOM from 'react-dom';

export function Component() {
    return <div>Hello from React!</div>
}

ReactDOM.createRoot(document.getElementById('react-root')).render(<Component />);