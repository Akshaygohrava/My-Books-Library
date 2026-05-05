
// Search with Google Books (for rich data)
async function searchGoogleBooks(query) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
  );
  return await response.json();
}

// Get cover from Open Library (as backup)
function getOpenLibraryCover(isbn) {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}

// Full working example
async function searchBooks() {
  const searchTerm = 'harry potter';
  
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`
    );
    const data = await res.json();
    
    data.items.forEach(book => {
      console.log({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.[0],
        cover: book.volumeInfo.imageLinks?.thumbnail,
        description: book.volumeInfo.description?.slice(0, 200),
        rating: book.volumeInfo.averageRating,
        link: book.volumeInfo.previewLink
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}













