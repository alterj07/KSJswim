export function loadNavBar() {
  // Prevent duplicate navbar injection
  if (document.querySelector('nav.navbar')) {
    return;
  }

  const navHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">KSJ Swim</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav" style="justify-content: space-between; width: 80%; margin: 0 auto">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="src/pages/instructors.html">Instructors</a>
            <a class="nav-link" href="#pricing">Pricing</a>
            <a class="nav-link" href="#signup">Sign-Ups</a>
          </div>
        </div>
      </div>
    </nav>
  `;
  // document.body.insertAdjacentHTML('afterbegin', navHTML);
  return navHTML;
}

// loadNavBar();