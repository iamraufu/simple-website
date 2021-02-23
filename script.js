fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showUserNames(data))

function showUserNames(data) {
    let usersHTML = '';
    data.forEach(user => {
        usersHTML = usersHTML + `<div class="user">
                    <h1>${user.name}</h1>
                    <p>${user.email}</p>
                    <p>${user.company.name}. ${user.company.catchPhrase}.${user.company.bs}</p>
                    </div>`
    });
    document.getElementById('user-list').innerHTML = usersHTML;
}