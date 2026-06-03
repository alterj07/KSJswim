export function loadInstructor2Card() {
    const instructor2HTML = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Instructor 2</h5>
            <p class="card-text">Description for Instructor 2</p>
            <a href="#" class="btn btn-primary">Go somewhere idk where yet</a>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', instructor2HTML);
}