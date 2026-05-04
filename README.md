# 📚 BookShelf - Your Digital Reading Oasis

BookShelf is a modern, responsive web application designed for book lovers to explore, browse, and manage a diverse collection of books. It provides a smooth and visually appealing experience with a clean UI and efficient functionality.

---

## 🌐 Live Demo
🔗 https://ph-assignment8.vercel.app/

---

## 🎯 Purpose

The goal of this project is to build a user-friendly digital library system that allows users to:

- Discover books  
- Browse categories efficiently  
- Manage book collections  
- Experience a modern UI/UX  

---

## ✨ Features

- 🎞️ Responsive Hero Banner (Swiper.js)
- 📚 Dynamic Book Inventory (JSON-based data)
- 🔍 Category Filtering (Story, Tech, Science)
- 🔐 Authentication System (Login / Signup)
- 📊 Statistics Counter Section
- 🎨 Consistent Modern UI Theme
- ⚡ Fast Performance with Next.js

---

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- React.js
- Tailwind CSS

### Libraries
- swiper
- next-themes
- better-auth
- lucide-react
- framer-motion

### Data Analysis (Development Phase)
- pandas
- seaborn

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Swarna-Saha/bookshelf.git
cd bookshelf
npm install
NEXT_PUBLIC_API_URL=your_api_url
BETTER_AUTH_SECRET=your_secret
MONGODB_URI=your_mongodb_uri
npm run dev
http://localhost:3000   ```
###bookshelf/
├── app/              # App router
├── components/       # UI components
├── lib/              # Utilities (auth, db)
├── data/             # JSON dataset
├── public/           # Static assets
├── styles/           # Global styles
