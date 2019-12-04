function insertPostRow(tbody, post) {
    const newRow = tbody.insertRow();
    let cell, element, innerText;
    for (key in post) {
        if (key === 'id') continue;
        element = post[key];
        cell = newRow.insertCell(-1);
        innerText = element;
        if (key === 'title' || key === 'body')
            innerText = element.charAt(0).toUpperCase() + element.slice(1);
        const node = document.createTextNode(innerText);
        cell.appendChild(node);
    }
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const tbody = document.querySelector('table tbody');
    posts.forEach(post => {
        insertPostRow(tbody, post);
    });
}

fetchPosts();