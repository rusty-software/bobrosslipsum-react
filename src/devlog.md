# 🗒️ Dev Log: Migrating ClojureScript (Reagent) Project to React (JavaScript) for GitHub Pages

**Project**: `bobrosslipsum`  
**Goal**: Convert a ClojureScript + Reagent project to a deployable JavaScript + React app using Vite, targeting GitHub Pages.

---

## ✅ Phase 1: Initial Setup

### 🔨 Tools Chosen
- **React (JavaScript)** — no TypeScript
- **Vite** — for fast builds and dev server
- **GitHub Pages** — target deployment platform

### 🛠️ Project Initialization
- Ran `npm create vite@latest bobrosslipsum-react -- --template react`
- Cleaned up default Vite files (`App.jsx`, etc.)
- Set up minimal `main.jsx`:
  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';

  function App() {
    return <div>Hello, Bob Ross Ipsum!</div>;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  ```

---
## Rinning the site locally

After installing, simply run:

```bash
npm run dev
```

This will:

Start a local development server (usually on http://localhost:5173)

Watch for changes and hot-reload automatically


---

## ⚠️ Gotcha Encountered: `index.html` location

- **Problem**: React wasn't rendering; only "Loading Bob Ross Lipsum..." showed.
- **Cause**: Vite loads `index.html` from the **root**, not `/public`.
- **Fix**: Moved `index.html` to the root and updated it to:
  ```html
  <div id="root">Loading Bob Ross Lipsum...</div>
  <script type="module" src="/src/main.jsx"></script>
  ```

---

## ✅ Phase 2: Reagent to React Conversion

### 🧩 Reagent `home-page` structure:
```clojure
(defn home-page []
  [:div
   [sidebar]
   [content]])
```

### 🔁 Converted to React:
- Created `HomePage.jsx`:
  ```jsx
  function HomePage() {
    return (
      <div>
        <Sidebar />
        <Content />
      </div>
    );
  }
  export default HomePage;
  ```

- Sidebar & Content are separate components.
- Rendered `<HomePage />` in `main.jsx`.

---

## ✅ Phase 3: Lipsum Generator Port

### 🧠 ClojureScript Function:
- Took `num-p` paragraphs and `num-s` sentences from shuffled `quotes/lines`
- Rendered as paragraphs

### 🔁 JavaScript Version:
- Created `DisplayLipsum.jsx`
- Used `shuffle`, `slice`, `join`, and `useState`
- Renders:
  ```jsx
  <div id="lipsum-text">
    <p>Sentence group 1</p>
    ...
  </div>
  ```

- Accepts `numParagraphs` and `numSentences` as props

### 🔌 Connected to:
```jsx
<DisplayLipsum numParagraphs={numParagraphs} numSentences={numSentences} />
```

---

## 🔜 Next Steps

### ⏭️ Planned:
- 🔧 Migrate clipboard functionality (copy button + interaction)
- 🎨 Migrate and flesh out `instructions`, `sample`, `about`, `contact`
- 📦 Bundle with Vite (`npm run build`) and deploy to GitHub Pages

---

## 🗃️ Files So Far

| File | Purpose |
|------|---------|
| `index.html` (root) | HTML entry point with `div#root` |
| `src/main.jsx` | React mount point |
| `src/HomePage.jsx` | Renders full app layout |
| `src/DisplayLipsum.jsx` | Migrated lipsum generator component |

---

## 📁 Project Folder Layout (so far)
```
bobrosslipsum-react/
├── index.html
├── public/
│   └── (images, etc.)
├── src/
│   ├── main.jsx
│   ├── HomePage.jsx
│   ├── DisplayLipsum.jsx
├── package.json
```

---

✅ **Current Status**:  
React app displays sidebar + content with generated Bob Ross text.

🔜 **Next Goal**:  
Implement clipboard copy + finalize subcomponents.
