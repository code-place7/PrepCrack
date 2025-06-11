# PrepCrack

<p align="center">
  <img src="public/robot.png" alt="PrepCrack Logo" width="120" /> 
</p>

<h1 align="center">🚀 PrepCrack</h1>
<p align="center">
  <b>AI-powered interview preparation platform</b><br>
  <img src="https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=fff" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=fff" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" />
  <img src="https://img.shields.io/badge/Tailwind-38BDF8?logo=tailwindcss&logoColor=fff" />
</p>

<p align="center">
  <a href="#-features">✨ Features</a> •
  <a href="#-quickstart">⚡ Quickstart</a> •
  <a href="#-project-structure">📁 Project Structure</a> •
  <a href="#-customization">🛠️ Customization</a> •
  <a href="#-contributing">🤝 Contributing</a> •
  <a href="#-license">📝 License</a>
</p>

---

## ✨ Features

<p align="center">
  <img src="https://img.icons8.com/color/48/nextjs.png" title="Next.js" />
  <img src="https://img.icons8.com/color/48/firebase.png" title="Firebase" />
  <img src="https://img.icons8.com/color/48/typescript.png" title="TypeScript" />
  <img src="https://img.icons8.com/color/48/tailwindcss.png" title="Tailwind CSS" />
</p>

- 🎤 **AI Voice Interviewer:** Practice interviews with a conversational AI that asks role-specific questions.
- 📝 **Instant Feedback:** Receive detailed, category-based feedback and scores after each interview.
- 💼 **Role & Tech Stack Customization:** Tailor interviews to specific roles, experience levels, and technologies.
- 📊 **Interview History:** Track your progress and review feedback from past interviews.
- 👥 **Community Interviews:** Access and take interviews created by other users.

---

## ⚡ Quickstart

```bash
git clone https://github.com/your-username/prepcrack.git
cd prepcrack
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

1. **Configure `.env.local`:**

   ```env
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   ```

2. **Run the app:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📁 Project Structure

- `app/` – Next.js app directory (routes, layouts, pages)
- `components/` – Reusable React components
- `constants/` – Static data and configuration
- `firebase/` – Firebase client and admin setup
- `lib/` – Utility functions and server actions
- `types/` – TypeScript type definitions
- `public/` – Static assets (images, icons, etc.)

---

## 🛠️ Customization

- **Interview Questions:** The AI generates questions based on the selected role, level, and tech stack.
- **Feedback Categories:** Feedback is structured into communication, technical knowledge, problem-solving, cultural fit, and confidence.

---

---

🖼️ Screenshots

<p align="center"> <img src="public/home.png" width="350" alt="prepcrack Screenshot 1" /> <img src="public/generation.png" width="350" alt="prepcrack Screenshot 2" /> <img src="public/feedback.png" width="350" alt="prepcrack Screenshot 2" /> </p>

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check [issues page](../../issues) or submit a pull request.

---

## 📝 License

MIT License © [code-place7](https://github.com/code-place7)

---

<p align="center">
  <sub>Built with ❤️ using Next.js, Firebase, and AI APIs</sub>
</p>
