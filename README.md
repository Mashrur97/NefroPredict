🔬 NefroPredict — Early CKD Detection Using AI
NefroPredict is a full-stack web application that leverages machine learning to assist in the early detection of Chronic Kidney Disease (CKD). The project combines an interactive frontend, intelligent ML-backed backend, and essential healthcare-focused preprocessing—all in one.

Live link: https://sparkly-torrone-44dcdb.netlify.app/
Backend  :   https://github.com/Mashrur97/NefroPredict-Backend
---

## 🌟 Features

- 🧠 **ML-Powered Predictions**  
  Detects potential CKD using trained machine learning models on clinical data.

🩺 User-Friendly Interface
Built with React and TailwindCSS for a responsive, clean, and modern UI.

🔍 Step-by-Step Flow
Guided input form, real-time predictions, and CKD risk output with explanation.

🔐 Privacy Focused
No personal data is stored. All predictions are computed on-the-fly with full transparency.

🛠 Tech Stack
Frontend: React, TailwindCSS, Framer Motion

Backend: Node.js, Express.js

ML Model: Scikit-learn (Random Forest) trained on real clinical datasets

Hosting: Netlify (Frontend), Render/Heroku (Backend)

🚀 How It Works
Input Clinical Data
Users provide health metrics such as glucose, blood pressure, albumin, and creatinine.

Prediction Engine
The backend API processes the input and feeds it to a trained Random Forest model.

Risk Output
The app returns a risk level (Low, Medium, or High) with a confidence percentage.

Guidance
Based on risk, users receive recommendations—especially if medical consultation is advised.

👨‍💻 Meet the Team
Tanvir Rahman Majumdar — Data preprocessing & feature engineering

Mashrur Fardin — Frontend development & UI/UX design

Al Af Muktadir — Backend development & ML model integration

📦 Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/yourusername/nefropredict.git
cd nefropredict

# Install dependencies
npm install

# Run the development server
npm run dev