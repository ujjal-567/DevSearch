# 🔧 Developer Documentation - Search Engine API

## Overview

The search engine is built with vanilla JavaScript and includes:
- 48 offline searchable documents
- Online documentation/video links database
- Fuzzy search algorithm with Levenshtein distance
- Local storage persistence
- Dark mode support
- Responsive design

---

## 📦 Core Data Structures

### 1. Language Links Database

```javascript
const languageLinks = {
    [language_key]: {
        name: 'Display Name',
        docs: 'https://documentation-url',
        official: 'https://official-website',
        w3schools: 'https://w3schools-tutorial',
        videos: ['https://youtube-url-1', 'https://youtube-url-2']
    }
}
```

**Example:**
```javascript
html: {
    name: 'HTML',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    official: 'https://html.spec.whatwg.org/',
    w3schools: 'https://www.w3schools.com/html/',
    videos: ['https://www.youtube.com/results?search_query=HTML+tutorial']
}
```

### 2. Document Structure

```javascript
const documents = [
    {
        id: 1,                              // Unique identifier
        language: 'html',                   // Category: 'html', 'css', 'javascript', 'general'
        title: 'HTML Basics',               // Display title
        content: 'DOCTYPE html - Root element...', // Content to search/display
        filename: 'html_basics.html',       // Reference filename
        docs: languageLinks.html            // Link to documentation
    }
]
```

---

## 🔍 Search Functions

### executeSearch(query)
```javascript
/**
 * Main search function
 * @param {string} query - Search query
 * @returns {void} - Updates currentResults and displays results
 */
executeSearch(query) {
    // 1. Filter by language
    // 2. Search with fuzzy matching
    // 3. Sort by relevance
    // 4. Store in history
    // 5. Display results
}
```

### searchDocumentFuzzy(query, doc)
```javascript
/**
 * Fuzzy search in a single document
 * @param {string} query - Search query
 * @param {object} doc - Document object
 * @returns {boolean} - True if document matches
 */
searchDocumentFuzzy(query, doc) {
    // 1. Check title exact match
    // 2. Check content exact match
    // 3. Calculate fuzzy score
    // 4. Return true if score > 50
}
```

### calculateFuzzyScore(query, doc)
```javascript
/**
 * Calculate match score using fuzzy matching
 * @param {string} query - Search query (lowercase)
 * @param {object} doc - Document object
 * @returns {number} - Score 0-100+
 */
calculateFuzzyScore(query, doc) {
    let score = 0;
    // Title exact match: +100
    // Content exact match: +50
    // Word matches: +30 (title), +15 (content)
    // Levenshtein similarity: +score*2 (title), +score (content)
    return score;
}
```

### levenshteinScore(str1, str2)
```javascript
/**
 * Simplified Levenshtein distance scoring
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} - Match score 0-50
 */
levenshteinScore(str1, str2) {
    // Character-by-character comparison
    // Counts matching characters
    // Returns similarity score
}
```

---

## 🎨 Display Functions

### displayResults()
```javascript
/**
 * Display search results on the page
 * @returns {void} - Updates resultsContainer with HTML
 */
displayResults() {
    // 1. Get page results (10 per page)
    // 2. Build HTML for each result
    // 3. Include documentation links
    // 4. Insert into DOM
    // 5. Update pagination
}
```

### Result Item HTML Structure
```html
<div class="result-item">
    <span class="result-language html">HTML</span>
    <a class="result-title">Result Title</a>
    <div class="result-url">filename.html</div>
    <div class="result-content">Content preview...</div>
    <div class="result-relevance">Relevance: 85%</div>
    <div class="result-links">
        <a href="..." target="_blank" class="doc-link">📚 Documentation</a>
        <a href="..." target="_blank" class="doc-link">🌐 Official</a>
        <a href="..." target="_blank" class="doc-link">📖 W3Schools</a>
        <a href="..." target="_blank" class="doc-link">🎥 Videos</a>
    </div>
</div>
```

---

## 💾 Storage Functions

### addToHistory(query, resultCount)
```javascript
/**
 * Add search to history (localStorage)
 * @param {string} query - Search query
 * @param {number} resultCount - Number of results found
 * @returns {void}
 */
addToHistory(query, resultCount) {
    // 1. Create history entry
    // 2. Prepend to searchHistory array
    // 3. Keep last 20 searches
    // 4. Save to localStorage
}
```

### localStorage Keys
```javascript
searchHistory   // Array of search queries
totalSearches   // Count of total searches
darkMode        // Boolean for dark mode
selectedLanguages // Array of language filters
```

---

## 🎛️ UI Functions

### updateLanguageFilter()
```javascript
/**
 * Update selected language filters
 * @returns {void} - Updates selectedLanguages global
 */
updateLanguageFilter() {
    // 1. Get all checked checkboxes
    // 2. Extract values
    // 3. Update global selectedLanguages
    // 4. If none selected, select 'all'
}
```

### toggleDarkMode()
```javascript
/**
 * Toggle dark mode and save preference
 * @returns {void}
 */
toggleDarkMode() {
    // 1. Toggle body.dark-mode class
    // 2. Save to localStorage
    // 3. Update button text
}
```

### showPage(pageId)
```javascript
/**
 * Show specific page, hide others
 * @param {string} pageId - Page ID (e.g., 'home', 'results')
 * @returns {void}
 */
showPage(pageId) {
    // 1. Hide all pages
    // 2. Show specified page
    // 3. Set focus if home page
}
```

---

## 🔗 Extending the System

### Add a New Language

1. **Add to languageLinks:**
```javascript
const languageLinks = {
    // ... existing languages
    rust: {
        name: 'Rust',
        docs: 'https://doc.rust-lang.org/',
        official: 'https://www.rust-lang.org/',
        w3schools: 'https://www.w3schools.com/rust/',
        videos: ['https://www.youtube.com/results?search_query=Rust+tutorial']
    }
}
```

### Add New Documents

1. **Add to documents array:**
```javascript
const documents = [
    // ... existing documents
    {
        id: 49,
        language: 'rust',
        title: 'Rust Ownership',
        content: 'Ownership rules: Each value has owner. When owner drops, value freed. Prevents memory leaks.',
        filename: 'rust_ownership.txt',
        docs: languageLinks.rust
    }
];
```

2. **Update display logic if needed:**
```javascript
// Update color for new language
.result-language.rust { background-color: #CE422B; }
```

### Add Custom Search Features

1. **Override executeSearch:**
```javascript
function executeSearch(query) {
    // Add custom logic before/after
    // Filter by date, author, etc.
    // Add AI-powered suggestions
    // Fetch from external APIs
}
```

2. **Add new search method:**
```javascript
function searchByKeyword(keyword) {
    return documents.filter(doc => 
        doc.content.includes(keyword) ||
        doc.tags?.includes(keyword)
    );
}
```

### Integrate External APIs

1. **Fetch from MDN API:**
```javascript
async function searchMDN(query) {
    const response = await fetch(`https://developer.mozilla.org/api/v1/search?q=${query}`);
    return response.json();
}
```

2. **Combine with local results:**
```javascript
async function executeSearch(query) {
    const localResults = documents.filter(/* ... */);
    const mdnResults = await searchMDN(query);
    currentResults = [...localResults, ...mdnResults];
    displayResults();
}
```

---

## 📊 Configuration

### Results Per Page
```javascript
const resultsPerPage = 10;  // Change to show more/fewer results
```

### Fuzzy Score Threshold
```javascript
return score > 30  // Minimum score for results
```

### Search History Size
```javascript
if (searchHistory.length > 20) {
    searchHistory.pop();  // Keep last 20 searches
}
```

---

## 🎨 CSS Customization

### Color Scheme
```css
:root {
    --primary-color: #4285F4;      /* Google Blue */
    --secondary-color: #EA4335;    /* Google Red */
    --success-color: #34A853;      /* Google Green */
    --warning-color: #FBBC04;      /* Google Yellow */
}
```

### Language Colors
```css
.result-language.html { background-color: #E34C26; }  /* HTML Orange */
.result-language.css { background-color: #1572B6; }   /* CSS Blue */
.result-language.javascript { background-color: #F7DF1E; color: #000; }  /* JS Yellow */
.result-language.general { background-color: #888888; }  /* Gray */
```

### Dark Mode
```css
body.dark-mode {
    --text-primary: #E8EAED;
    --bg-primary: #202124;
    --border-color: #5F6368;
}
```

---

## 🧪 Testing

### Test Fuzzy Search
```javascript
const testDoc = { title: 'CSS Flexbox', content: 'flex display' };
const score = calculateFuzzyScore('flexbox', testDoc);
console.log(score > 50);  // Should be true
```

### Test Levenshtein
```javascript
const score = levenshteinScore('flexbox', 'flexbx');
console.log(score > 40);  // Should be close match
```

### Test Storage
```javascript
localStorage.setItem('testKey', 'testValue');
console.log(localStorage.getItem('testKey') === 'testValue');
```

---

## 📈 Performance Tips

1. **Optimize Search:**
   - Add indexing for large datasets
   - Cache search results
   - Use Web Workers for heavy computation

2. **Improve Loading:**
   - Lazy load documentation links
   - Use service workers for offline support
   - Minify CSS/JS files

3. **Enhance UX:**
   - Add search autocomplete
   - Show suggestions as you type
   - Implement infinite scroll

---

## 🐛 Debugging

### Enable Debug Mode
```javascript
window.DEBUG = true;

function log(msg) {
    if (window.DEBUG) console.log(msg);
}
```

### Inspect Search Results
```javascript
console.table(currentResults);
```

### Check Storage
```javascript
console.log(localStorage.getItem('searchHistory'));
```

### Test Filters
```javascript
console.log(selectedLanguages);
console.table(documents.filter(d => selectedLanguages.includes(d.language)));
```

---

## 📚 External Resources

- **MDN Web Docs**: https://developer.mozilla.org/
- **JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- **Web APIs**: https://developer.mozilla.org/en-US/docs/Web/API

---

**Version**: 2.0 (Online Resources Edition)
**Status**: ✅ Production Ready
**Last Updated**: 2024
