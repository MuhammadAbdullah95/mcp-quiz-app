# MCP Quiz App 📚

<div align="center">

![MCP Quiz App](https://img.shields.io/badge/MCP-Quiz%20App-blue?style=for-the-badge&logo=react)
![Developer](https://img.shields.io/badge/Developer-Muhammad%20Abdullah-purple?style=for-the-badge&logo=github)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20TypeScript%20%7C%20Tailwind-green?style=for-the-badge)

**🚀 Developed by [Muhammad Abdullah](https://github.com/MuhammadAbdullah95) 🚀**

*Full Stack Developer & MCP Specialist*

</div>

---

A comprehensive, frontend-only quiz application for **Model Context Protocol (MCP)** exam preparation. Featuring 150 carefully crafted questions with progressive difficulty levels and real-world scenarios.

**✨ Built with excellence using React, TypeScript, and Tailwind CSS ✨**

## Features ✨

- **150 MCQ Questions** covering all MCP topics
- **No Authentication Required** - Just start the quiz
- **Flexible Navigation** - Go back/forward, stop anytime
- **Detailed Results** - See correct answers and explanations
- **Category Breakdown** - Performance analysis by topic
- **Mobile Responsive** - Works on all devices
- **Local Storage** - Saves progress automatically
- **Vercel Ready** - Easy deployment

## Quick Start 🚀

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd mcp-quiz-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment to Vercel 🌐

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name? `mcp-quiz-app`
   - Directory? `./`
   - Override settings? `N`

### Option 2: Vercel Dashboard

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to [vercel.com](https://vercel.com)**

3. **Import your project:**
   - Click "New Project"
   - Import from Git repository
   - Select this project

4. **Configure settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Deploy!**

## Project Structure 📁

```
mcp-quiz-app/
├── src/
│   ├── components/
│   │   ├── HomePage.tsx          # Landing page
│   │   ├── QuizInterface.tsx     # Main quiz interface
│   │   ├── ResultsPage.tsx       # Results and review
│   │   └── ProgressBar.tsx       # Progress indicator
│   ├── data/
│   │   └── questions.json        # Question bank (150 MCQs)
│   ├── types/
│   │   └── quiz.types.ts         # TypeScript definitions
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
└── README.md                     # This file
```

## Question Bank 📝

The app includes 150 carefully crafted MCQs covering:

- **HTTP Theory** (20 questions) - HTTP basics, lifecycle, structured examples
- **REST APIs** (15 questions) - RESTful service patterns
- **JSON-RPC** (12 questions) - Remote procedure call protocol  
- **MCP Fundamentals** (45 questions) - Core concepts, tools, resources, prompts
- **Capabilities & Transport** (25 questions) - Advanced MCP features
- **OpenAI Integration** (15 questions) - Agents SDK integration
- **OAuth Security** (10 questions) - Authentication and authorization
- **Advanced Features** (8 questions) - Stateful capabilities and more

## Customization 🎨

### Adding More Questions

Edit `src/data/questions.json`:

```json
{
  "id": 151,
  "question": "Your question here?",
  "options": [
    "Option A",
    "Option B", 
    "Option C",
    "Option D"
  ],
  "correctAnswer": 0,
  "explanation": "Detailed explanation here.",
  "category": "Category Name",
  "difficulty": "easy|medium|hard"
}
```

### Changing Passing Score

Edit `PASSING_PERCENTAGE` in `src/App.tsx`:

```typescript
const PASSING_PERCENTAGE = 70; // Change to desired percentage
```

### Styling

The app uses Tailwind CSS. Modify styles in:
- `src/index.css` - Global styles
- Component files - Component-specific styles
- `tailwind.config.js` - Tailwind configuration

## Browser Support 🌐

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License 📄

MIT License - feel free to use this project for your own quiz applications!

## Support 💬

If you encounter any issues:
1. Check the browser console for errors
2. Ensure you're using a supported browser
3. Try clearing localStorage: `localStorage.clear()`
4. Refresh the page

---

## 👨‍💻 About the Developer

<div align="center">

### Muhammad Abdullah
**Full Stack Developer & MCP Specialist**

🚀 **Expertise:** React, TypeScript, Node.js, Python, AI Integration  
🎯 **Specialization:** Model Context Protocol, OpenAI Agents SDK, FastMCP  
💻 **Focus:** Building scalable web applications and AI-powered tools  
🏆 **Mission:** Creating exceptional user experiences with cutting-edge technology  

*"Building the future of AI-powered applications, one line of code at a time"*

[![GitHub](https://img.shields.io/badge/GitHub-MuhammadAbdullah95-black?style=for-the-badge&logo=github)](https://github.com/MuhammadAbdullah95)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/muhammad-abdullah)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-orange?style=for-the-badge&logo=firefox)](https://muhammad-abdullah.dev)

</div>

---

**Happy studying! 🎓** Good luck with your MCP exam preparation!

*Crafted with ❤️ by Muhammad Abdullah*
