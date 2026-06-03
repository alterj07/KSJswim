export function loadJoshCard() {
    const joshHTML = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Joshua Lee</h5>
            <p class="card-text">P good at swimming + WW swim team captain</p>
            <a href="#" class="btn btn-primary">Go somewhere idk where yet</a>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', joshHTML);
}