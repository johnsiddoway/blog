import Container from 'react-bootstrap/Container';
import { Footer } from './footer';
import { Header } from './header';

export function Layout({ children }) {
    return <>
        <Header />
        <Container as="main">{children}</Container>
        <Footer />
    </>
}
