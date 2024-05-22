fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById('book-list');
        data.books.forEach(book => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = book.url;
            link.textContent = book.title;
            listItem.appendChild(link);
            bookList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading books:', error));