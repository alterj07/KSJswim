export function loadNavBar() {
  // Prevent duplicate navbar injection
  if (document.querySelector('nav.navbar')) {
    return;
  }

  const navHTML = `
    <nav class="navbar navbar-expand-lg bg-black opacity-50" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 2;">
      <div class="container-fluid" style="background-color: clear">
        <a class="navbar-brand text-white" href="/">KSJ Swim</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style="justify-content: space-between; width: 80%; margin: 0 auto; background-color: clear">
            <a class="nav-link text-white active" aria-current="page" href="/">Home</a>
            <a class="nav-link text-white" href="/src/pages/instructors.html">Instructors</a>
            <a class="nav-link text-white" href="/src/pages/pricing.html">Pricing</a>
            <a class="nav-link text-white" href="/src/pages/signup.html">Sign-Ups</a>
          </div>
        </div>
      </div>
    </nav>
  `;
  // document.body.insertAdjacentHTML('afterbegin', navHTML);
  return navHTML;
}

// loadNavBar();