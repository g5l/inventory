document.addEventListener('DOMContentLoaded', () => {
    const username = window.location.pathname.split('/').pop();
    const usernameHeading = document.getElementById('username-heading');
    const itemList = document.getElementById('item-list');

    if (username) {
        usernameHeading.textContent = `Inventário do ${username}`;
        fetchItems(username);
    } else {
        usernameHeading.textContent = 'Nenhum nome de usuário fornecido';
    }
});

function fetchItems(username) {
    const apiUrl = `https://api.example.com/users/${username}/items`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name;
                document.getElementById('item-list').appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching items:', error);
        });
}
