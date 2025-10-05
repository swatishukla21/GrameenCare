# 🌾 GrameenCare – AI-Powered Rural Healthcare Assistant

GrameenCare is an AI-based healthcare platform designed to bridge the medical accessibility gap in rural and semi-urban India.  
It offers intelligent health assessments, teleconsultation support, and AI-powered chatbot guidance to assist patients and community health workers where access to doctors is limited.

---

## 🚀 Features

- 🧠 **AI Chatbot** for basic health advice and symptom triage  
- 🩺 **Teleconsultation Support** connecting rural patients to healthcare professionals  
- 🌍 **Multilingual Interface** for regional accessibility  
- 🧾 **Electronic Health Record (EHR)** storage and retrieval  
- 📍 **Location-based Health Services** recommendations  
- 🔐 **Secure Authentication & Data Handling**

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | [Next.js](https://nextjs.org/) (React + TypeScript) |
| **Styling** | Tailwind CSS |
| **Backend/API** | Next.js API Routes / Node.js |
| **Database** | Firebase / Firestore |
| **AI Model** | OpenAI API / Custom Model Integration |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🛠️ Installation & Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/swatishukla21/GrameenCare.git
cd GrameenCare
2. Install Dependencies
Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
3. Create Environment Variables
Create a file named .env.local in the project root and add your keys:

bash
Copy code
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# Add any other variables as needed
4. Run the Development Server
bash
Copy code
npm run dev
By default, it runs on http://localhost:3000.

🧱 Project Structure
ruby
Copy code
GrameenCare/
├── public/             # Static assets
├── pages/              # Next.js pages (routes)
│   ├── api/            # API routes
│   └── index.tsx       # Homepage
├── components/         # Reusable UI components
├── styles/             # Tailwind/global styles
├── utils/              # Helper functions
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
☁️ Deployment on Vercel
1. Login to Vercel
Sign in with your GitHub account.

2. Import Project
Click “New Project” → “Import Git Repository”

Select swatishukla21/GrameenCare

Vercel will automatically detect Next.js as the framework

3. Configure Build Settings
Setting	Value
Framework Preset	Next.js
Build Command	npm run build
Output Directory	(Auto-detected)
Install Command	npm install

4. Add Environment Variables
In Vercel dashboard → Settings → Environment Variables, add all keys from your .env.local.

5. Deploy
Click Deploy, and Vercel will:

Install dependencies

Build your project

Assign a live domain like https://grameencare.vercel.app

You can later connect a custom domain from the Domains tab.

🔍 Troubleshooting
Issue	Cause	Solution
'next' is not recognized as a command	Next.js not installed globally	Run npm install before npm run dev
Build fails on Vercel	Missing environment variables	Add all .env.local variables in Vercel
Images not loading	External domain not configured	Add allowed domains in next.config.ts
Firebase errors	Invalid config	Double-check Firebase credentials and rules

🧑‍💻 Contributors
Swati Shukla – Project Lead & Developer
GitHub

📜 License
This project is licensed under the MIT License – you’re free to use and modify it with attribution.

💡 Future Enhancements
Integration with government health APIs (Ayushman Bharat, eSanjeevani)

Offline-first support for low-connectivity regions

Advanced AI diagnostics & prediction models

Voice-based multilingual support

“Empowering rural India with accessible and intelligent healthcare solutions.”