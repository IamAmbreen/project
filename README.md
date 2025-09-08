# Savilles
A responsive and user-friendly laundary service webpage that showcases services, pricing, and booking options, making it easy for customers to schedule laundary pickups and deliveries online.
# installation
```bash
# clone the repo
*git clone
https://github.com/user-name/project-name.git
# navigate to project
*cd project-name(e.g "project")
#install dependencies
npm install
this will install all the necessary node modules that are important for the project.
# After installation
npm start or go through the package.json file to see the run command.

# Features
 - Responsive design(mobile, medium and large screens)
 - Service listing (Washing , dry cleaning , ironing)
 - Pricing plans
 - Google map integration

#Tech stack
**Frontend
  -- React Typescript vite
**Styling
  --Tailwindcss3
**Deployment
  --Github
# Project Structure
Savilles/
src/
.../assets/
    .../icons/
    .../images/
...components/
   ../Navbar.tsx
   ../HeroSection.tsx
   ../WorkingProcess.tsx
   ../Pricing.tsx
   ../Location.tsx
   ../WorkingHours.tsx
   ../Testimonial.tsx
   ../WhoWeAre.tsx
   ../Faq.tsx
   ../Services.tsx
   ../FooterSection.tsx
App.tsx/
index.css/
main.tsx/
index.html/
package.json/
   
# React + TypeScript + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

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

export default tseslint.config([
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
