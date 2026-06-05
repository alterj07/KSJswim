export function loadNavBar() {
  // Prevent duplicate navbar injection
  if (document.querySelector('nav.navbar')) {
    return;
  }

  const navHTML = `
    <nav class="ksj-navbar navbar navbar-expand-md">
      <div class="container-fluid" style="width: 50vw; border-radius: 50px; padding: 0.5rem 1rem; margin: 0 auto;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style="justify-content: space-between; width: 80%; margin: 0 auto; background-color: clear">
            <a class="nav-link ksj-navbar-text" aria-current="page" href="/">Home</a>
            <a class="nav-link ksj-navbar-text" href="/src/pages/instructors.html">Instructors</a>
            <a class="nav-link ksj-navbar-text" href="/src/pages/pricing.html">Pricing</a>
            <a class="nav-link ksj-navbar-text" href="/src/pages/signup.html">Sign-Ups</a>
          </div>
        </div>
      </div>
    </nav>
  `;
  // document.body.insertAdjacentHTML('afterbegin', navHTML);
  return navHTML;
}

// loadNavBar();