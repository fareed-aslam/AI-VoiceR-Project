AI VoicerR
Transform text into natural speech with advanced AI voice synthesis.
Generate lifelike voices, clone your own, and create audio in multiple languages—all in seconds.

AI VoicerR Dashboard
<img width="1884" height="932" alt="image" src="https://github.com/user-attachments/assets/efd57736-3bb7-4cc2-b239-3e2810cf2a60" />

AI VoicerR Landing
<img width="1905" height="932" alt="image" src="https://github.com/user-attachments/assets/285b2204-fe59-4175-9727-9c2b42f3e2e0" />


Features
AI Voice Cloning: Create custom voices or use pre-built professional voices.
Natural Speech Synthesis: Convert text to speech with lifelike intonation and emotion.
Multiple Languages & Voices: Access hundreds of voices in many languages and accents.
High-Quality Audio Downloads: Instantly download generated audio.
Fast Processing: Optimized AI infrastructure for rapid results.
Cloud Storage: Securely store and manage your audio projects.
User Dashboard: Track your projects, usage, and manage your account.
Free Credits: Start for free—no credit card required.
Demo
Try it live: https://ai-voicer.vercel.app

Screenshots
<img width="1905" height="932" alt="image" src="https://github.com/user-attachments/assets/285b2204-fe59-4175-9727-9c2b42f3e2e0" />
<img width="1899" height="929" alt="image" src="https://github.com/user-attachments/assets/04f64a28-8f27-4eab-affd-0eab6e75c411" />
<img width="1895" height="888" alt="image" src="https://github.com/user-attachments/assets/0ae4e35c-1b77-4e5d-b985-608914ee561a" />
<img width="1890" height="923" alt="image" src="https://github.com/user-attachments/assets/3563e7e6-5a94-45f1-9e6a-4851db402a15" />





Tech Stack
Frontend: Next.js, React, Tailwind CSS
Backend: Node.js, Prisma, PostgreSQL
Authentication: Better Auth
Cloud Storage: AWS S3
Deployment: Vercel
Other: Modal API, Sonner (notifications)
Getting Started
Prerequisites
Node.js (v18+)
npm or yarn
PostgreSQL database (or use the provided NeonDB connection)
Installation
Clone the repository:

Install dependencies:

Configure environment variables:

Copy .env.example to .env and fill in your credentials:
Run database migrations:

Start the development server:

Visit http://localhost:3000

Deployment
Deploy easily on Vercel.
Set all environment variables in the Vercel dashboard under Project Settings → Environment Variables.
For production, set BETTER_AUTH_URL to your deployed URL (e.g., https://ai-voicer.vercel.app).
Environment Variables
Name	Description
DATABASE_URL	PostgreSQL connection string
BETTER_AUTH_SECRET	Auth secret for Better Auth
BETTER_AUTH_URL	Base URL of your app
AWS_ACCESS_KEY_ID	AWS S3 access key
AWS_SECRET_ACCESS_KEY	AWS S3 secret key
AWS_REGION	AWS region
AWS_S3_BUCKET_NAME	S3 bucket name
MODAL_API_URL	Modal API endpoint
MODAL_API_KEY	Modal API key
MODAL_API_SECRET_KEY	Modal API secret
Contribution
Contributions are welcome!
Please open issues or submit pull requests for improvements and new features.

License
MIT License © 2026 Fareed Aslam

Contact
For support or questions, email: demo@gmail.com
