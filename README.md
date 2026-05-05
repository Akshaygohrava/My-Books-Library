# 📚 My Books Library

A modern, responsive JavaScript book discovery application that helps you explore and discover the best books across various genres and categories.

[![Live Demo](https://img.shields.io/badge/🌐-Live%20Preview-blue?style=for-the-badge)](https://akshay-my-book-library.netlify.app/)

---

## ✨ Features

- 🔍 **Smart Search Functionality** - Search for books by title, author, or genre
- 📖 **Real-Time Data** - Fetches live book data from the Google Books API
- 🎨 **Beautiful UI** - Modern, book-themed design with elegant background
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Optimized** - Quick loading times with efficient DOM manipulation
- 📚 **Top Books Showcase** - Discover popular titles like:
  - Atomic Habits
  - Ikigai
  - Rich Dad Poor Dad
  - And many more!

---

## 🚀 Live Preview

Experience the app in action:

[![Preview Button](https://img.shields.io/badge/Preview%20Live%20App-Visit%20Now-success?style=for-the-badge&logo=netlify)](https://akshay-my-book-library.netlify.app/)

---

## 🛠️ Tech Stack

| Technology | Usage | Percentage |
|-----------|-------|-----------|
| **JavaScript** | Core Logic & DOM Manipulation | 69% |
| **CSS** | Styling & Responsive Design | 23.2% |
| **HTML** | Structure & Markup | 7.8% |

---

## 📋 Project Structure

```
My-Books-Library/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript logic & API integration
└── README.md           # Project documentation
```

---

## 🔌 API Integration

This project uses the **Google Books API** to fetch real book data including:
- Book titles and authors
- Descriptions and reviews
- Cover images
- Publishing information
- ISBN numbers

### Example API Call:
```javascript
fetch(`https://www.googleapis.com/books/v1/volumes?q=search_query&key=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => displayBooks(data))
```

---

## 🎯 Learning Outcomes

This project is perfect for practicing:
- ✅ **API Integration** - Working with RESTful APIs
- ✅ **DOM Manipulation** - Dynamic content rendering
- ✅ **Asynchronous JavaScript** - Fetch API and promises
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Search & Filter** - Data filtering techniques

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Google Books API

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Akshaygohrava/My-Books-Library.git
cd My-Books-Library
```

2. **Get a Google Books API Key:**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Books API
   - Generate an API key

3. **Update the API key:**
   - Open `script.js`
   - Replace `YOUR_API_KEY` with your actual API key

4. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

---

## 💡 How It Works

1. **User Input** - Enter a book title, author name, or genre
2. **API Request** - The app sends a request to Google Books API
3. **Data Processing** - Results are parsed and formatted
4. **Dynamic Rendering** - Books are displayed with images, titles, and descriptions
5. **Interactive Experience** - Users can explore, read reviews, and discover more

---

## 📸 Features in Detail

### Search Functionality
- Real-time search as you type
- Filter by multiple criteria
- Display relevant book results instantly

### Beautiful Book Cards
- High-quality book cover images
- Book title and author information
- Brief description and rating
- Direct links to purchase or read reviews

### Responsive Design
- Mobile-optimized layout
- Touch-friendly interface
- Adapts to all screen sizes
- Perfect on any device

---

## 🌟 Key Highlights

- **Atomic Habits** - Master the power of tiny changes
- **Ikigai** - Discover your reason for being
- **Rich Dad Poor Dad** - Change your perspective on money
- ... and discover thousands more!

---

## 📝 Future Enhancements

- [ ] Add user favorite/bookmark functionality
- [ ] Implement reading list feature
- [ ] Add book ratings and reviews
- [ ] Dark mode toggle
- [ ] Advanced filtering options
- [ ] Local storage for user preferences
- [ ] Share functionality on social media

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Akshaygohrava**

- GitHub: [@Akshaygohrava](https://github.com/Akshaygohrava)
- Portfolio: [Visit My Books Library](https://akshay-my-book-library.netlify.app/)

---

## 🙏 Acknowledgments

- [Google Books API](https://developers.google.com/books) - For providing real book data
- [Netlify](https://www.netlify.com/) - For hosting this amazing app
- All the book authors and publishers for their incredible works

---

## 📞 Support

If you encounter any issues or have suggestions, please:
- Open an [issue](https://github.com/Akshaygohrava/My-Books-Library/issues)
- Create a discussion
- Reach out directly

---

<div align="center">

### Made with ❤️ by Akshaygohrava

**[👉 Preview the Live App 👈](https://akshay-my-book-library.netlify.app/)**

⭐ If you like this project, please give it a star!

</div>
