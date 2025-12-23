# Product Listing Page (PLP) - Appscrip Assignment
A fully functional, SEO-optimized, and responsive Product Listing Page built with React.js. This project replicates a professional e-commerce interface based on a specific Figma design, featuring dynamic product grids, customizable filters, and a mobile-first approach.

### 🚀 Live Demo
### https://elegant-granita-d12c1c.netlify.app/
____

### 🛠️ Tech Stack
- Frontend: React.js
- Styling: Pure CSS (No heavy frameworks for minimal bundle size)
- Icons: React Icons (ci set)
- Data Fetching: Axios / Fetch API
- API: Fake Store API
- Deployment: Netlify
___
### ✨ Features
- Responsive Design: Seamless experience across Mobile (375px), Tablet (768px), and Desktop (1440px+).
- Dynamic Product Grid: Fetches and displays products dynamically with optimized image handling.
- Filter Sidebar: Functional filtering logic for refining product results.
- SEO Optimized: * Semantic HTML5 tags (header, main, footer).
  - Meta titles and descriptions for improved search ranking.
  - JSON-LD Schema markup for product lists.
- Performance: Minimal DOM depth and zero reliance on heavy UI libraries like Bootstrap or Tailwind.
____

### 📂 Project Structure
```
Plaintext

src/
├── assets/          # Local fonts (Simplon Norm) and images
├── components/      # Functional React components
│   ├── Header.js    # Navigation and Search
│   ├── Filters.js   # Sidebar checkboxes and logic
│   ├── ProductGrid.js # Container for product cards
│   ├── ProductCard.js # Individual product items
│   └── Footer.js    # Bottom links and info
├── App.js           # Main application logic & State management
├── App.css          # Global styles and Media Queries
└── index.js         # App entry point
```
___
### ⚙️ Installation & Setup
1. Clone the repository:
```
Bash
git clone https://github.com/yourusername/appscrip-task-sujil.git
```

2. Navigate to the project folder:
```
Bash

cd appscrip-task-sujil
```
3. Install dependencies:
```
Bash

npm install
```
4. Start the development server:
```
Bash

npm start
```
___
### 🎨 Design Reference
The UI was developed following the Figma Design Task.

Key Design Elements:

- Font Family: Simplon Norm
- Primary Colors: Defined in App.css variables for consistency.
- Grid Layout: 3-column (Desktop), 2-column (Tablet), 1-column (Mobile).
___
### 📝 SEO Implementation
To ensure high performance and discoverability, this project includes:
- Alt Text: Every product image contains descriptive alt tags.
- Semantic Tags: Used <section> and <article> tags for product listings.
- Meta Data: Managed via public/index.html for optimized crawling.
___
### 👤 Author
Sujil S Mathew * GitHub: @sujilsmathew54@gmail.com