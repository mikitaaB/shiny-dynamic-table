## shiny-dynamic-table

**Objective:** Build a search interface that queries a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) with debounce and animations.


**Functionality:**
 - Debounced input (300ms delay);
 - API params: Filter by name, username, email, phone, company name;
 - Loading state with skeleton animation;
 - Error handling.

**Animations:**
 - Smooth list appearance;
 - Hover effects on cards.

**Responsive:**

Desktop: 4-column grid. \
Mobile: 1-column list with touch-friendly buttons.

**Semantics:**

`<main> <section> <article>`

### How to setup

1. Install Node.js: https://nodejs.org/en/ (LTS)
2. Install all dependencies:
   `npm install`

### How to run

To run the app in **development** mode:

```
npm run dev
```

The app will be available at http://localhost:5173.

To run the app in **production** mode:

```
npm run build
npm run preview
```

The app will be available at http://localhost:4173/shiny-dynamic-table/.