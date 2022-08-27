fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayComment(data))

function displayComment(posts) {
    const parentDiv = document.getElementById('parent-div');
    posts.forEach(post => {
        const childDiv = document.createElement('div');
        childDiv.classList.add('card')
        childDiv.innerHTML = `
        <h3>User Id: ${post.userId}</h3>
        <hr> 
        <h2>Title: ${post.title} </h2>
        <p> Details: ${post.body} </p>
        `
        parentDiv.append(childDiv);
    })
}



