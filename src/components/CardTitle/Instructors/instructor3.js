export function loadInstructor3Card() {
    const instructor3HTML = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Instructor 3</h5>
            <p class="card-text">Description for Instructor 3</p>
            <a href="#" class="btn btn-primary">Go somewhere idk where yet</a>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', instructor3HTML);
}