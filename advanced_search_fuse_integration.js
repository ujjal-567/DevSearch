/*
Advanced Search Integration (Fuse.js)

What this file contains:
- A ready-to-drop-in patch that integrates Fuse.js (client-side fuzzy search) into your existing script.js
- Builds a Fuse index from the `documents` array on DOMContentLoaded
- Replaces performSearch/executeSearch flow to use Fuse results (falling back to existing search if Fuse unavailable)
- Adds debounce for the search input and live suggestions powered by Fuse
- Lightweight rank scoring and faceted language filter handling

How to apply:
1. Add Fuse.js to your index.html (CDN) in the <head> or before your script.js include:
   <script src="https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.min.js"></script>
2. Append this file's content to the end of your existing /mnt/data/script.js OR merge the functions (recommended: append and test).
3. Ensure `documents` is available globally before this script runs.

Notes:
- This implementation uses Fuse.js for faster, smarter fuzzy search with weights on title/content/filename.
- It preserves your existing executeSearch fallback and relevance attributes for UI compatibility.

*/

// --- Advanced Search using Fuse.js ---
(function() {
  // Fuse index instance
  let fuseIndex = null;
  // debounce timer
  let searchDebounce = null;

  // Fuse options tuned for code/docs search
  const fuseOptions = {
    includeScore: true,
    shouldSort: true,
    threshold: 0.35, // lower = stricter, higher = fuzzier
    distance: 100,
    minMatchCharLength: 2,
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'content', weight: 0.3 },
      { name: 'filename', weight: 0.1 }
    ]
  };

  // Build Fuse index from documents
  function buildFuseIndex() {
    try {
      if (typeof Fuse === 'undefined') {
        console.warn('Fuse.js not found; advanced search disabled. Include Fuse.js CDN to enable.');
        return;
      }
      // Create lightweight dataset (map fields only)
      const docsForIndex = documents.map(doc => ({
        id: doc.id,
        title: doc.title || '',
        content: (doc.content || '').slice(0, 5000), // cap to avoid huge indexing
        filename: doc.filename || '',
        language: doc.language || 'general'
      }));

      fuseIndex = new Fuse(docsForIndex, fuseOptions);
      console.log('Fuse index built for', docsForIndex.length, 'documents');
    } catch (e) {
      console.error('Error building Fuse index', e);
      fuseIndex = null;
    }
  }

  // Run a fused search, applying language filter and pagination
  function runFuseSearch(rawQuery, languageFilter) {
    if (!fuseIndex) return null;
    const q = (rawQuery || '').trim();
    if (!q) return [];

    // Run fuse search
    const fuseResults = fuseIndex.search(q, { limit: 200 });

    // Map results into existing document shape and compute normalized relevance
    const mapped = fuseResults.map(r => {
      const doc = documents.find(d => d.id === r.item.id) || {};
      const score = (1 - (r.score || 1)); // fuse score 0 = exact, 1 = no match
      return Object.assign({}, doc, { fuseScore: Math.round(score * 100) });
    }).filter(d => {
      if (!languageFilter || languageFilter.length === 0 || languageFilter.includes('all')) return true;
      return languageFilter.includes(d.language);
    });

    // Sort by fuseScore desc then doc.relevance if present
    mapped.sort((a,b) => (b.fuseScore || 0) - (a.fuseScore || 0) || (b.relevance || 0) - (a.relevance || 0));
    return mapped;
  }

  // Debounced wrapper for search input
  function debounceSearchHandler(e) {
    clearTimeout(searchDebounce);
    const val = e.target.value;
    searchDebounce = setTimeout(() => {
      if (val && val.trim().length > 0) {
        // perform searchable suggestions
        performAdvancedSearch(val);
      }
    }, 220);
  }

  // Show live suggestions powered by Fuse
  function showLiveSuggestionsFuse(query) {
    const container = document.getElementById('liveSuggestions');
    if (!container) return;
    container.innerHTML = '';
    if (!fuseIndex || !query || !query.trim()) return;

    const suggestions = fuseIndex.search(query, { limit: 8 }).map(r => r.item);
    if (!suggestions || suggestions.length === 0) return;

    const frag = document.createDocumentFragment();
    suggestions.forEach(s => {
      const el = document.createElement('div');
      el.className = 'suggestion-item';
      el.textContent = (s.title || s.filename || '').slice(0, 80);
      el.onclick = () => { document.getElementById('searchInput').value = s.title || s.filename || ''; performAdvancedSearch(s.title || s.filename || ''); };
      frag.appendChild(el);
    });
    container.appendChild(frag);
  }

  // High-level function used by UI to run the advanced search and display results
  function performAdvancedSearch(query) {
    const languageFilter = (selectedLanguages && selectedLanguages.length > 0 && !selectedLanguages.includes('all')) ? selectedLanguages : null;

    // Prefer Fuse if available
    if (fuseIndex) {
      const fuseResults = runFuseSearch(query, languageFilter);
      if (fuseResults && fuseResults.length > 0) {
        currentResults = fuseResults.map((r, idx) => {
          // ensure numeric relevance for compatibility with UI
          r.relevance = r.fuseScore || (r.relevance || 0);
          return r;
        });

        // Save history/stats
        addToHistory(query, currentResults.length);
        totalSearches++;
        localStorage.setItem('totalSearches', totalSearches);

        currentPage = 1;
        showPage('results');
        displayResults();
        document.getElementById('resultsInput').value = query;
        return;
      }
    }

    // Fallback - use existing search functions
    executeSearch(query);
  }

  // Attach event bindings and initialize fuse index on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Build Fuse index asynchronously to not block UI
    setTimeout(buildFuseIndex, 60);

    const input = document.getElementById('searchInput');
    if (input) {
      // Remove any direct oninput attribute (if present) and attach debounced handler
      try { input.removeEventListener('input', showLiveSuggestions); } catch(e){}
      input.addEventListener('input', function(e) {
        // show live suggestions using Fuse; keep original showLiveSuggestions for fallback
        showLiveSuggestionsFuse(e.target.value);
        debounceSearchHandler(e);
      });

      // also bind Enter key explicitly
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          performAdvancedSearch(e.target.value);
        }
      });
    }

    const resultsInput = document.getElementById('resultsInput');
    if (resultsInput) {
      resultsInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') performAdvancedSearch(e.target.value); });
    }

    // Expose performAdvancedSearch globally for other parts of app
    window.performAdvancedSearch = performAdvancedSearch;
    // Keep old performSearch for backward compatibility
    const oldPerformSearch = window.performSearch;
    window.performSearch = function() {
      const q = document.getElementById('searchInput').value || document.getElementById('resultsInput').value;
      if (!q || !q.trim()) { alert('Please enter a search query'); return; }
      performAdvancedSearch(q);
    };

    console.log('Advanced Fuse search integration loaded.');
  });

})();
