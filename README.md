# 💼 Personal Portfolio Website

A sleek, responsive, and animated **portfolio website** built using **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **React Icons**. This website showcases my skills, projects, and contact information in an elegant and developer-friendly manner.

---

## 🚀 Tech Stack

- ⚛️ **React (Vite)** — Fast development experience with lightning-fast build times  
- 🎨 **Tailwind CSS** — Utility-first CSS framework for rapid UI development  
- 🌀 **Framer Motion** — For smooth animations and transitions  
- 💎 **React Icons** — Icon library with popular icon packs  

---

## 🛠️ Installation and Setup Instructions

Follow these steps to set up the project locally:

### 1️⃣ Create Your Vite Project

```bash
npm create vite@latest my-portfolio
cd my-portfolio
```
### 2️⃣ Install Tailwind CSS and Plugin
```bash
npm install tailwindcss @tailwindcss/vite
```
### 3️⃣ Configure Tailwind Plugin in Vite
Update your vite.config.js:
// vite.config.js
```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
})
```
### 4️⃣ Import Tailwind in CSS
In your main CSS file (e.g. index.css), add:
```bash
@import "tailwindcss";
```
### 5️⃣ Start the Development Server
```bash
npm run dev
```
