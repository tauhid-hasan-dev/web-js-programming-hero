fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayCard(data))


function displayCard(photos) {
    photos.map(photo => {
        const parentDIV = document.getElementById('parent-div')
        const childDIV = document.createElement('div');
        childDIV.classList.add('col-12');
        childDIV.classList.add('col-sm-12');
        childDIV.classList.add('col-md-6');
        childDIV.classList.add('col-lg-4');
        childDIV.innerHTML = `
                    <div class="card h-100 ">
                        <img src="${photo.thumbnailUrl}"
                            class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <p class="card-title fs-5 fw-bolder">${photo.title}</p>
                            <p class="card-text fw-light ">Album ID: ${photo.albumId}</p>
                            <div class="d-grid gap-2 ">
                                <button class="btn btn-primary btn-sm fw-semibold btn-select-player" type="button"
                                    style="--bs-btn-padding-y: .6rem;">Add to cart</button>
                            </div>
                            <p class="card-text fw-light ">See details</p>
                        </div>
                    </div>
                            `
        parentDIV.append(childDIV)
    }
    )

}
