import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './app';

export function render(url: any) {
    return ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>,
    )
}