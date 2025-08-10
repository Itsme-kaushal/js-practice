# JavaScript Practice Repository

## Overview

A comprehensive collection of JavaScript practice exercises, examples, and projects designed to help developers master JavaScript fundamentals, DOM manipulation, asynchronous programming, algorithms, and real-world applications.

## 📁 Folder Structure

```
js-practice/
├── basics/          # Core JavaScript concepts and syntax
│   ├── variables/
│   ├── data-types/
│   ├── operators/
│   ├── control-flow/
│   └── functions/
├── dom/             # DOM manipulation and browser APIs
│   ├── selectors/
│   ├── events/
│   ├── manipulation/
│   └── forms/
├── async/           # Asynchronous JavaScript
│   ├── callbacks/
│   ├── promises/
│   ├── async-await/
│   └── fetch-api/
├── algorithms/      # Data structures and algorithms
│   ├── sorting/
│   ├── searching/
│   ├── recursion/
│   └── data-structures/
├── projects/        # Hands-on projects
│   ├── todo-app/
│   ├── calculator/
│   ├── weather-app/
│   └── quiz-app/
└── tests/           # Test files
```

## 🚀 Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Itsme-kaushal/js-practice.git

# Navigate to the project directory
cd js-practice

# Install dependencies
npm install
```

## 🏃‍♂️ How to Run

### Running Scripts

```bash
# Run a specific JavaScript file
node path/to/your/file.js

# Run with npm scripts (if defined in package.json)
npm run start
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📋 NPM Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run the main application |
| `npm test` | Run all test suites |
| `npm run lint` | Check code quality with ESLint |
| `npm run format` | Format code with Prettier |
| `npm run dev` | Start development server |

## 📏 Coding Standards

### ESLint Configuration
This project uses ESLint for maintaining code quality:

```javascript
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
};
```

### Prettier Configuration
Code formatting is handled by Prettier:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🐛 Debugging Tips

### Browser DevTools
- **Console Logging**: Use `console.log()`, `console.table()`, `console.group()`
- **Breakpoints**: Set breakpoints in Sources tab
- **Network Tab**: Monitor API requests and responses

### Node.js Debugging
```bash
# Debug with Node.js inspector
node --inspect-brk your-file.js

# Debug with Chrome DevTools
node --inspect your-file.js
```

### VS Code Debugging
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Program",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/index.js"
    }
  ]
}
```

## ✅ Sample Problems Checklist

### Basics
- [ ] Variable declarations and scope
- [ ] Data type conversions
- [ ] Array methods (map, filter, reduce)
- [ ] Object manipulation
- [ ] ES6+ features (arrow functions, destructuring, modules)

### DOM Manipulation
- [ ] Element selection and modification
- [ ] Event handling
- [ ] Form validation
- [ ] Dynamic content creation

### Asynchronous Programming
- [ ] Promise chains
- [ ] Async/await patterns
- [ ] Error handling
- [ ] API integration

### Algorithms
- [ ] Sorting algorithms
- [ ] Search algorithms
- [ ] Recursion problems
- [ ] Data structure implementations

### Projects
- [ ] Interactive web applications
- [ ] API-driven projects
- [ ] Local storage usage
- [ ] Responsive design integration

## 🤝 Contribution Guidelines

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** following the coding standards
4. **Add tests** for new functionality
5. **Commit your changes**:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Commit Message Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Code Review Process
- All submissions require review
- Maintainers will provide feedback
- Address feedback and update your PR
- Once approved, changes will be merged

## 📝 TODOs

### High Priority
- [ ] Add comprehensive test suite
- [ ] Implement CI/CD pipeline
- [ ] Add TypeScript examples
- [ ] Create interactive documentation

### Medium Priority
- [ ] Add React.js practice section
- [ ] Include performance optimization examples
- [ ] Add accessibility best practices
- [ ] Create video tutorials for complex topics

### Low Priority
- [ ] Add advanced design patterns
- [ ] Include security best practices
- [ ] Add internationalization examples
- [ ] Create mobile-first responsive examples

## 📚 Learning Resources

- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! 🚀**

*Remember: The best way to learn JavaScript is by practicing consistently and building real projects.*
