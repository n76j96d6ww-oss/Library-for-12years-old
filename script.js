const books = [
  {
    id: "wild-robot",
    title: "The Wild Robot",
    author: "Peter Brown",
    category: "Adventure",
    description: "A robot learns kindness, survival, and friendship on a wild island.",
    colors: ["#6fa879", "#2f6b70"],
  },
  {
    id: "holes",
    title: "Holes",
    author: "Louis Sachar",
    category: "Mystery",
    description: "A funny, twisty story about friendship, family secrets, and courage.",
    colors: ["#c59151", "#7f5539"],
  },
  {
    id: "wonder",
    title: "Wonder",
    author: "R. J. Palacio",
    category: "Friendship",
    description: "A moving book about choosing kindness and seeing people clearly.",
    colors: ["#6797d1", "#7d70c7"],
  },
  {
    id: "phantom-tollbooth",
    title: "The Phantom Tollbooth",
    author: "Norton Juster",
    category: "Fantasy",
    description: "A clever journey through words, numbers, and imagination.",
    colors: ["#ec8b5f", "#b94b6f"],
  },
  {
    id: "hidden-figures",
    title: "Hidden Figures Young Readers' Edition",
    author: "Margot Lee Shetterly",
    category: "Science",
    description: "The true story of brilliant mathematicians who helped NASA fly.",
    colors: ["#475f9e", "#202f62"],
  },
  {
    id: "book-scavenger",
    title: "Book Scavenger",
    author: "Jennifer Chambliss Bertman",
    category: "Mystery",
    description: "Puzzle lovers chase clues through bookstores and secret codes.",
    colors: ["#58a7a1", "#2d6c75"],
  },
];

const STORAGE_KEY = "little-library-reading-shelf";

const bookList = document.querySelector("#book-list");
const searchInput = document.querySelector("#book-search");
const categoryFilters = document.querySelector("#category-filters");
const emptyMessage = document.querySelector("#empty-message");
const readingShelf = document.querySelector("#reading-shelf");
const shelfEmpty = document.querySelector("#shelf-empty");
const clearShelfButton = document.querySelector("#clear-shelf");

let activeCategory = "All";
let savedBookIds = readSavedBookIds();

function readSavedBookIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveBookIds() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedBookIds));
}

function getCategories() {
  return ["All", ...new Set(books.map((book) => book.category))];
}

function createBookCard(book) {
  const isSaved = savedBookIds.includes(book.id);
  const card = document.createElement("article");
  card.className = "book-card";
  card.innerHTML = `
    <div class="book-cover" style="--cover-a: ${book.colors[0]}; --cover-b: ${book.colors[1]}">
      ${book.title.charAt(0)}
    </div>
    <div>
      <span class="tag">${book.category}</span>
      <h3>${book.title}</h3>
      <p class="book-meta">by ${book.author}</p>
    </div>
    <p class="book-description">${book.description}</p>
    <button class="button ${isSaved ? "secondary" : "primary"}" type="button" data-book-id="${book.id}">
      ${isSaved ? "Saved to shelf" : "Add to shelf"}
    </button>
  `;

  return card;
}

function renderCategoryFilters() {
  categoryFilters.innerHTML = "";

  getCategories().forEach((category) => {
    const button = document.createElement("button");
    button.className = `filter-button${category === activeCategory ? " active" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryFilters();
      renderBooks();
    });

    categoryFilters.append(button);
  });
}

function getFilteredBooks() {
  const query = searchInput.value.trim().toLowerCase();

  return books.filter((book) => {
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    const searchableText = `${book.title} ${book.author} ${book.category}`.toLowerCase();
    return matchesCategory && searchableText.includes(query);
  });
}

function renderBooks() {
  const filteredBooks = getFilteredBooks();
  bookList.innerHTML = "";
  emptyMessage.hidden = filteredBooks.length > 0;

  filteredBooks.forEach((book) => {
    bookList.append(createBookCard(book));
  });
}

function renderShelf() {
  const savedBooks = savedBookIds
    .map((id) => books.find((book) => book.id === id))
    .filter(Boolean);

  readingShelf.innerHTML = "";
  shelfEmpty.hidden = savedBooks.length > 0;
  clearShelfButton.disabled = savedBooks.length === 0;

  savedBooks.forEach((book) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span><strong>${book.title}</strong> by ${book.author}</span>
      <button class="button secondary" type="button" data-remove-id="${book.id}">Remove</button>
    `;
    readingShelf.append(item);
  });
}

function toggleSavedBook(bookId) {
  if (savedBookIds.includes(bookId)) {
    savedBookIds = savedBookIds.filter((id) => id !== bookId);
  } else {
    savedBookIds = [...savedBookIds, bookId];
  }

  saveBookIds();
  renderBooks();
  renderShelf();
}

bookList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-book-id]");
  if (!button) {
    return;
  }

  toggleSavedBook(button.dataset.bookId);
});

readingShelf.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-id]");
  if (!button) {
    return;
  }

  toggleSavedBook(button.dataset.removeId);
});

clearShelfButton.addEventListener("click", () => {
  savedBookIds = [];
  saveBookIds();
  renderBooks();
  renderShelf();
});

searchInput.addEventListener("input", renderBooks);

document.querySelector(".visit-card").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  alert("Thanks for joining the Little Library reading list!");
});

renderCategoryFilters();
renderBooks();
renderShelf();
