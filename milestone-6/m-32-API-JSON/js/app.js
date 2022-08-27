function loadData() {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(users) {
    const cardHolder = document.getElementById('card-holder')
    let count = 0;
    for (let user of users) {
        count++;
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card mb-3 " style="max-width: 18rem;">
            <div class="card-header">${count}</div>
            <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.email}</p>
                <p class="card-text">${user.address.city}</p>
            </div>
       </div>
        `
        cardHolder.appendChild(card);
    }
}