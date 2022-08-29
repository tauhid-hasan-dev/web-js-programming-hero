const loadPlayers = (search) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player[0]))
}

const displayPlayers = (playerObj) => {
    //console.log(playerObj);
    const playerHolder = document.getElementById('player-holder');
    playerHolder.innerHTML = ``;
    const playerCard = document.createElement('div')
    playerCard.classList.add('col-4')
    console.log(playerHolder);
    playerCard.innerHTML = `
    <div class="card h-100 " >
        <img src="${playerObj.strThumb}" class="card-img-top" alt="...">
        <div class="card-body text-center">
            <p class="card-title fs-5 fw-bolder">${playerObj.strPlayer}</p>
            <p class="card-text fw-semibold ">Team: ${playerObj.strTeam}</p>
            <p class="card-text fw-regular ">Country: ${playerObj.strTeam2}</p>
            <div class="d-grid gap-2 ">
                <button class="btn btn-primary btn-sm fw-semibold btn-select-player"
                    type="button" style="--bs-btn-padding-y: .6rem;" >Add to cart</button>
            </div>
        </div>
    </div>
    `
    playerHolder.appendChild(playerCard);
}

const playerSearch = () => {
    console.log('object');
    const inputElem = document.getElementById('player-input');
    const inputValue = inputElem.value;
    loadPlayers(inputValue);
}

loadPlayers('messi')
