console.log('object');

const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = (users) => {
    for (let user of users) {
        console.log(user);
        const userContainer = document.getElementById('parent-div');
        const childDiv = document.createElement('div');
        childDiv.classList.add('user');
        childDiv.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="">
             <h1>Name: ${user.name.first} Surname: ${user.name.last}</h1>
             <h2>Gender: ${user.gender}</h2>
            <p>Email: ${user.email}</p>
    `
        userContainer.appendChild(childDiv);
    }
}

loadUser() 