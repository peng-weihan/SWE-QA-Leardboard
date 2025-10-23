# SWE-QA Benchmark Leaderboard

A leaderboard specifically designed for Software Engineering Question Answering (SWE-QA) benchmark, supporting real-time search, sorting, and statistical functions.

## About SWE-QA

Understanding and reasoning about entire software repositories is an essential capability for intelligent software engineering tools. While existing benchmarks such as CoSQA and CodeQA have advanced the field, they predominantly focus on small, self-contained code snippets. These setups fail to capture the complexity of real-world repositories, where effective understanding and reasoning often require navigating multiple files, understanding software architecture, and grounding answers in long-range code dependencies.

SWE-QA is a repository-level code question answering (QA) benchmark designed to facilitate research on automated QA systems in realistic code environments. SWE-QA involves 576 high-quality question-answer pairs spanning diverse categories, including intention understanding, cross-file reasoning, and multi-hop dependency analysis.

The benchmark is constructed based on naturally occurring developer questions extracted from 77,100 GitHub issues from 11 popular repositories, covering the following Python libraries: astropy, django, flask, matplotlib, pylint, pytest, requests, scikit-learn, sphinx, sqlfluff, xarray, sympy.

- 📊 **Dataset**: [Hugging Face SWE-QA-Benchmark](https://huggingface.co/datasets/swe-qa/SWE-QA-Benchmark)
- 📄 **Paper**: [SWE-QA: A Benchmark for Software Engineering Question Answering](https://arxiv.org/abs/2509.14635)

## Features

- 🏆 **Leaderboard Display** - Clearly shows model rankings and performance scores on SWE-QA benchmark
- 🔍 **Real-time Search** - Support for searching by model name or organization
- 📊 **Multi-dimensional Sorting** - Support for sorting by score, date, model name, organization
- 📈 **Statistical Information** - Display total models, average score, top score, participating organizations
- 🎨 **Modern UI** - Responsive design supporting mobile and desktop
- 📱 **Mobile Friendly** - Adaptive layout perfectly supporting various screen sizes

## Project Structure

```
leader board/
├── index.html          # Main page
├── styles.css          # Style files
├── script.js           # JavaScript logic
├── data.json           # Data file
├── config.json         # Configuration file
├── package.json        # Project configuration
└── README.md           # Documentation
```

## Quick Start

### Method 1: Direct Open
```bash
# Open index.html directly in browser
open index.html
```

### Method 2: Local Server
```bash
# Start local server with Python
python -m http.server 8000

# Or use Node.js
npx http-server -p 8000

# Or use live-server (with hot reload)
npx live-server --port=8000
```

### Method 3: Using npm scripts
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or start static server
npm run serve
```

## Data Format

Data file `data.json` format:
```json
[
  {
    "model": "GPT-4o",
    "score": 95.8,
    "org": "OpenAI",
    "date": "2024-05-13",
    "category": "Commercial Tools"
  }
]
```

## Custom Configuration

In `config.json` you can configure:
- Page title and description
- Default sorting method
- Column configuration
- Theme colors
- Other settings

## Adding New Data

1. Edit the `data.json` file
2. Add new model data
3. Refresh the page to see updates

## Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

### Other Static Hosting
- Netlify
- Vercel
- Any static file hosting service

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- JSON data format

## License

MIT License

## Contributing

Issues and Pull Requests are welcome!

## Changelog

### v1.0.0
- Initial version release
- Basic leaderboard functionality
- Search and sorting features
- Responsive design
