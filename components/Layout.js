import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';

const name = 'John Siddoway';

export function Layout({ children }) {
  return (
    <div class="d-flex flex-column">
        {/* <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div class="container">
                <a class="navbar-brand" href="/blog/">Maps and Gold</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/blog/">/home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog/archive.html">/archive</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog/about.html">/about</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        <main>{children}</main>
    </div>
    );
}