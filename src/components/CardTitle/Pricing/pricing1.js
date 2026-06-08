export function loadPricing1Card() {
    const pricing1HTML = `
    <div class="card" style="width: 25vw; height: 50vh">
        <div class="card-body" style="text-align:center; display: flex; flex-direction: column; width: 25vw">
            <div style="display: flex; flex: 3; align-items: center; justify-content: center;">
                <h5 class="card-title" style="text-align: center">Name of Package</h5>
            </div>
            <div style="display: flex; flex: 5">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            </div>
            <div style="display: flex; flex: 2; align-items: center; justify-content: center;">
                <h6 class="card-cost" style="font-size: xx-large; font-weight: bold;">$XX.XX/Lesson</h6>
            </div>
            <a href="#signup" class="ksj-card-cta-btn" style="text-align:center;">Get Started →</a>
        </div>
    </div>
    `;
    return pricing1HTML;
}