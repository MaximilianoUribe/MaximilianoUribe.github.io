type Book = {
  title: string
  author: string
  cover: string
}

// Add more books to this array and they'll flow into the grid automatically.
const books: Book[] = [
  {
    title: 'White Nights',
    author: 'Fyodor Dostoevsky',
    cover: 'https://covers.openlibrary.org/b/id/13017120-M.jpg',
  },
]

export default function BookClub() {
  return (
    <section className="bookclub-page">
      <ul className="book-grid">
        {books.map((book, i) => (
          <li className="book" key={i}>
            <img
              className="book-cover"
              src={book.cover}
              alt={`${book.title} by ${book.author}`}
              loading="lazy"
            />
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.author}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
