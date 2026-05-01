<h1 align="center">⚡ Pokedex Lite</h1>

<p align="center">
  A simple yet powerful Pokedex built using React & PokéAPI  
</p>

<p align="center">
  🔍 Search &nbsp;•&nbsp; 🎯 Filter &nbsp;•&nbsp; ❤️ Favorites &nbsp;•&nbsp; 📄 Details &nbsp;•&nbsp; 📱 Responsive
</p>

---

## 🚀 Overview

This project is a Pokedex web app where users can explore Pokémon, search them by name, filter them by type, and view detailed stats.

At first, it looked like a basic project, but while building it step by step, I realized how important it is to properly handle API data, manage multiple states, and structure components in a clean way.

---

## ✨ Features

* 📡 Fetch Pokémon list from PokéAPI
* 🔍 Search Pokémon by name
* 🎯 Filter Pokémon by type
* 📄 View detailed Pokémon info (HP, attack, abilities, image)
* ❤️ Mark/unmark favorites (persisted using localStorage)
* 📑 Pagination (Next / Previous)
* ⏳ Loading & error handling
* 📱 Fully responsive UI

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwind-css"/>
  <img src="https://img.shields.io/badge/API-PokéAPI-green?style=for-the-badge"/>
</p>

---

## 📦 Project Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Move into project
cd pokedex-lite

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── PokemonCard.jsx
 │    ├── PokemonModal.jsx
 │
 ├── Body.jsx        # main logic (state, API, filtering)
 ├── App.jsx
```

---

## ⚡ Challenges I Faced

### 🔹 Understanding API flow

Initially, I thought all Pokémon data would come from one API call.
But the list API only gives name + URL.

To get stats, types, and abilities, I had to make another API call for each Pokémon.
This helped me understand how APIs are often layered.

---

### 🔹 Handling images

The API didn’t directly provide images in the list response.

I figured out that:

* Pokémon ID can be extracted from the URL
* That ID can be used to generate the image URL

This was confusing at first but very useful to learn.

---

### 🔹 Type filtering complexity

Type was not available in the list API.

So I had to:

* fetch details of each Pokémon
* then filter based on type

This introduced multiple async calls and made the logic more complex.

---

### 🔹 Event bubbling issue

Clicking the favorite button was also opening the modal.

I learned about event bubbling and fixed it using:

```js
e.stopPropagation();
```

---

### 🔹 Managing multiple states

Handling different states like:

* Pokémon list
* filtered list
* selected Pokémon
* details
* favorites

was tricky at first, but I improved the structure step by step.

---

## 🧠 What I Learned

* How to work with real-world APIs
* Managing multiple states in React
* Component separation (UI vs logic)
* Event handling in nested elements
* Using localStorage for persistence
* Debugging and fixing real issues

---

## 🔮 Future Improvements

* Improve UI/UX design
* Add debounced search
* Optimize type filtering (reduce API calls)
* Add infinite scrolling

---

## 📌 Conclusion

This project helped me go beyond basic React concepts.

The biggest learning was:

> Writing code is easy, but understanding the flow and handling real problems is what actually matters.
