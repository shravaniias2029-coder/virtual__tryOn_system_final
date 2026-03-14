<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
TryOnX - Virtual Try-On System

Virtual Try-On System is a modern web application that allows users to digitally preview clothing items before purchasing them. Users can upload their images, explore outfits, and complete purchases through an integrated payment system. The application provides secure authentication, a responsive UI, and a seamless shopping experience.

Project Overview

This project demonstrates how modern web technologies can be combined with cloud services to build an interactive fashion platform. The system enables users to visualize clothing virtually, improving decision-making in online shopping.

Features

• Secure user authentication (Email & Google)
• Upload image for virtual try-on
• Browse and preview outfits
• Integrated payment module
• Responsive modern UI
• Cloud database for user data
• Smooth animations and interactive interface


Tech Stack

Frontend
• React.js
• TypeScript
• Tailwind CSS

Backend / Cloud
• Firebase Authentication
• Cloud Firestore

Libraries
• Framer Motion
• Lucide


Make sure the following are installed:
• Node.js (v18 or higher)
• npm or Yarn
• Git

Check installation:
node -v
npm -v
git --version

Installation Guide
1. Clone the Repository
git clone https://github.com/yourusername/virtual-tryon-system.git

Navigate into the project directory:

cd virtual-tryon-system
2. Install Dependencies
npm install

Th
is will install all required packages including React, Firebase, and other libraries.

3. Environment Configuration

Create a .env file in the root folder.

touch .env

Add your Firebase configuration:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=xxxxx

You can get these credentials from Firebase Console.

4. Start Development Server

Run the project locally:
npm run dev
Open in browser:

http://localhost:5173
Build for Production
npm run build

Preview production build:

npm run preview
Authentication

The system supports:
• Email & Password Authentication
• Google Sign-In Authentication
Authentication is handled through Firebase Authentication.
Payment Integration
The application includes a payment module allowing users to complete purchases after selecting outfits. This feature simulates a modern e-commerce checkout process.


Author
Pradnya Bhondivale

License
This project is developed for educational and demonstration purposes.
>>>>>>> 0c25f09182df62fcbd032efd74731c399e41425a
