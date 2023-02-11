class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
    <a href="#" class="logo"><img src="assets/homePageImg/snLogo.jpg" alt="" /></a>
    <!-- <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
      <img src="assets/img/snLogo.jpg" alt="" />
      <h1>SN Enterprise<span>.</span></h1> -->
    </a>

      <nav id="navbar" class="navbar">
        <ul>
        <li><a href="/index.html#hero">Home</a></li>
        <li><a href="/index.html#about">About</a></li>
        <li><a href="/index.html#Suppliers">Suppliers</a></li>
        <li><a href="/index.html#clients">Clients</a></li>
        <li><a href="/index.html#chefs">Our Team</a></li>
        <li><a href="/index.html#gallery">Gallery</a></li>
          <li class="dropdown">
            <a href="#"
              ><span>Our Products</span>
              <i class="bi bi-chevron-down dropdown-indicator"></i
            ></a>
            <ul>
            <li><a href="/Exxaro/Exxaro_Tiles.html">Exxaro Tiles</a></li>
            <li><a href="/AGL/AGL_Tiles.html">AGL Tiles</a></li>
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
          <li><a href="/index.html#contact">Contact</a></li>
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