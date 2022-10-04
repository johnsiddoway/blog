export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Maps and Gold</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="/">/home</a>
                        <a className="nav-link" href="/archive">/archive</a>
                        <a className="nav-link" href="/about">/about</a>
                    </div>
                </div>
            </div>
        </nav>
        /* <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
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
        </nav> */
      );
  }