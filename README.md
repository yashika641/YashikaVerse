# 🌌 YashikaVerse – My Intelligent Portfolio Universe

> 🚀 _“Explore my work, chat with my skills, and visualize my journey.”_  
> An AI-powered, full-stack interactive personal portfolio built for the data-driven, bioinformatics-savvy, machine learning engineer in you.

![banner](./assets/yashikaverse_banner.png) <!-- Optional banner image -->

---

## 📌 Overview

**YashikaVerse** is not just a portfolio — it's an *interactive AI-powered universe* that showcases my projects, skills, research, and thought leadership in **Data Science**, **AI/ML**, **Bioinformatics**, and **Full-Stack Development**.

This intelligent portfolio lets visitors:
- 🧠 Chat with my resume, projects, and skills (powered by GPT-4 + LangChain)
- 📂 Explore and filter live project showcases with tags and outcomes
- 📊 Launch real-time ML/Bioinformatics dashboards & demos
- 📄 Parse and visualize my resume dynamically
- 📝 Read SEO-friendly technical blogs
- 📈 View real-time analytics on project trends

---

## 🧠 Key Features

| Feature | Description |
|--------|-------------|
| 🤖 **AI Chatbot Assistant** | Ask me anything about my skills, projects, resume, or even ML/AI concepts. Powered by GPT-4 + LangChain + FAISS |
| 📂 **Smart Project Visualizer** | Grid and timeline view with filters, modals, GitHub links, demos, and tech stacks |
| 📊 **Live ML & Bioinformatics Demos** | Streamlit dashboards for EDA, gene heatmaps, PCA, etc. |
| 📄 **Resume Intelligence Panel** | Visual timeline of resume, skill cloud, and PDF download |
| 📝 **Blog Engine** | Technical & research blogs written in Markdown/Notion |
| 📈 **Analytics Dashboard** | Track visitors, clicks, trending projects using Google Analytics or Plausible |
| 🧬 **Bioinformatics Playground** | Upload FASTA/VCF and visualize genomic data in real time |

---

## 🧱 Tech Stack

### 🎨 Frontend
- React.js / Next.js
- TailwindCSS
- MDX / Notion API (Blogs)
- Chart.js / Plotly.js

### 🔧 Backend
- FastAPI / Flask
- GPT-4 via OpenAI API
- LangChain + FAISS (Vector DB)
- Resume Parser (pdfminer / PyMuPDF)

### 📊 Demos & Tools
- Streamlit
- BioPython, Pandas, Plotly
- Hugging Face Spaces / Streamlit Cloud

### 📦 Storage & Deployment
- Firebase / S3 (File Storage)
- Vercel (Frontend)
- Railway / Render (Backend)
- GitHub Actions (CI/CD)

---

## 🏗️ Architecture

```

Client (React/Next.js) ───▶ Project Viewer, Resume UI, Blog Pages, Chat Widget
│
▼
API (FastAPI/Flask) ───────▶ Resume Parsing, Project JSON, Blog Sync
│
▼
LangChain + GPT-4 (RAG) ──▶ Chatbot answers using Resume + GitHub + Blogs
│
▼
FAISS Index (Vector Store) ◀─ Loaded docs (PDFs, MD files, code)
│
▼
Streamlit Apps ───────────▶ EDA Dashboards, Gene Expression Heatmaps

````

---

## 🚀 Getting Started

### 🔧 Local Setup

```bash
# Clone the repo
git clone https://github.com/yashika641/yashikaverse.git
cd yashikaverse

# Install frontend dependencies
cd client
npm install

# Start frontend
npm run dev

# In new terminal, setup backend
cd ../server
pip install -r requirements.txt
uvicorn app.main:app --reload
````

### 🧪 Run Streamlit Demos

```bash
cd streamlit_demos/gene_expression_tool
streamlit run app.py
```

---

## 📸 Screenshots

<!-- Add real screenshots/gifs -->

![project-visualizer](./assets/screenshots/project_visualizer.gif)
![resume-parser](./assets/screenshots/resume_panel.png)
![chatbot](./assets/screenshots/chatbot_demo.gif)

---

## 🔗 Live Demo (Coming Soon)

* **Frontend:** [https://yashikaverse.vercel.app](https://yashikaverse.vercel.app)
* **Streamlit Apps:** [Gene Visualizer](https://your-streamlit-link)
* **GitHub Repo:** [https://github.com/yashika641/yashikaverse](https://github.com/yashika641/yashikaverse)

---

## 🙋‍♀️ Author

**Yashika Pal**
M.Sc. Bioinformatics | Data Scientist | AI Researcher
🔗 [LinkedIn](https://www.linkedin.com/in/yashikapal)
📧 [yashika641@gmail.com](mailto:yashika641@gmail.com)
🌐 [Portfolio](https://yashikaverse.vercel.app)

---

## 📃 License

MIT License — feel free to clone, customize, and build your own intelligent portfolio!

---

## 🌟 Contribute

Contributions welcome! If you have ideas to extend the portfolio with more tools or plugins, submit an issue or pull request.
