class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <a
        href="/index.html"
        class="logo d-flex align-items-center me-auto me-lg-0"
      >
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="assets/img/logo.png" alt="" />
        <h1>SN Enterprise<span>.</span></h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#chefs">Our Squad</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li class="dropdown">
            <a href="#"
              ><span>Our Products</span>
              <i class="bi bi-chevron-down dropdown-indicator"></i
            ></a>
            <ul>
               <li class="dropdown">
                <a href="#"
                  ><span>Tiles</span>
                  <i class="bi bi-chevron-down dropdown-indicator"></i
                ></a>
                <ul>
                  <li><a href="/Exxaro/Exxaro_Tiles.html">Exxaro Tiles</a></li>
                  <li><a href="/AGL/AGL_Tiles.html">AGL Tiles</a></li>
                </ul>
               <li class="dropdown">
                <a href="#"
                  ><span>CERA</span>
                  <i class="bi bi-chevron-down dropdown-indicator"></i
                ></a>
                <ul>
                  <li><a href="/Cera/ceramics.html">Ceramics</a></li>
                  <li><a href="/Cera/sanitaryware.html">Sanitaryware</a></li>
                </ul>
               <li class="dropdown">
                <a href="#"
                  ><span>Roca</span>
                  <i class="bi bi-chevron-down dropdown-indicator"></i
                ></a>
                <ul>
                  <li><a href="/Roca/ceramics.html">Ceramics</a></li>
                  <li><a href="/Roca/sanitaryware.html">Sanitaryware</a></li>
                </ul>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <!-- .navbar -->

      <a class="btn-book-a-table" href="#book-a-table">Drop a Query</a>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
    `;
  }
}

customElements.define('header-component', Header);