# Pokedex Lite

## Overview

This project is a simple Pokedex web application built using React and PokéAPI.

The main goal of this assignment was to build a UI that can fetch Pokémon data from an API and allow users to search, filter, paginate, and view details. Along with that, I also implemented favorites and basic error handling.

While building this, I focused more on understanding the flow of data and managing state properly rather than just making the UI look fancy.

---

## Features

* Fetch Pokémon list from PokéAPI
* Search Pokémon by name
* Filter Pokémon by type
* Pagination (Next / Previous)
* View Pokémon details in a modal (HP, attack, abilities, image)
* Mark Pokémon as favorites
* Favorites are stored in localStorage
* Loading and error handling
* Responsive layout

---

## Tech Stack

* React (Vite)
* JavaScript
* Tailwind CSS
* PokéAPI

---

## Setup Instructions

```bash
git clone https://github.com/gptHarshit/pokemon-lite-project

cd pokemon-lite-project

npm install

npm run dev
```

---

## Project Structure

```
src/
 ├── components/
 │    ├── PokemonCard.jsx
 │    ├── PokemonModal.jsx
 │
 ├── Body.jsx
 ├── App.jsx
```

---

## How it Works

* First, the Pokémon list is fetched using PokéAPI with pagination (offset + limit).
* Each Pokémon only gives name and URL initially.
* When needed, another API call is made using that URL to get full details like stats and types.
* Search works by filtering the current list based on the input value.
* Type filter works by checking each Pokémon’s type from the detailed API response.
* Favorites are stored in localStorage so they remain even after refresh.
* When a card is clicked, a modal opens and shows detailed data.

---

## Challenges Faced

### API understanding

At first, I thought everything would come from a single API call.
But the list API only gives basic data, and for details, another API call is required.

Understanding this flow took some time.

---

### Image issue

Images were not directly available in the list response.
I had to extract the Pokémon ID from the URL and use it to generate the image URL.

---

### Type filtering

Filtering by type was not straightforward because type data is not available in the list API.
I had to fetch details for each Pokémon and then filter them.

---

### Event handling issue

When I added the favorite button, clicking it was also opening the modal.

This happened due to event bubbling, and I fixed it using:

```js
e.stopPropagation();
```

---

### State management

Managing multiple states like list, filtered data, selected Pokémon, and favorites was confusing at first, but it became clearer after structuring the logic properly.

---

## What I Learned

* How APIs actually work in real projects
* Handling multiple API calls
* Managing state in React
* Component separation (Card and Modal)
* Using localStorage
* Debugging issues step by step

---

## Future Improvements

* Improve UI design
* Optimize type filtering (reduce API calls)
* Add better animations
* Implement infinite scroll

---

## Conclusion

This project helped me understand how a real-world React application works.

It was not just about writing code, but about understanding how data flows and how different parts of the application are connected.
