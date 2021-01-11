function Header() {
  return (
    <div>
      <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#home">Ngan Tran</a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" data-scroll href="#about">
              About me
            </a>
            <a className="nav-link" data-scroll href="#portfolio">
              Portfolio
            </a>
            <a className="nav-link" data-scroll href="#certification">
              Certifications
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
