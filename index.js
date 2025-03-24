document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => renderBooks(books))
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear previous content

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}
