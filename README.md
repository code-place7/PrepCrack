# PrepCrack

PrepCrack is an AI-powered interview preparation platform that enables users to practice real job interviews and receive instant, structured feedback. Built with [Next.js](https://nextjs.org), it leverages advanced AI models to simulate interviews and provide actionable insights for improvement.

## Features

- 🎤 **AI Voice Interviewer:** Practice interviews with a conversational AI that asks role-specific questions.
- 📝 **Instant Feedback:** Receive detailed, category-based feedback and scores after each interview.
- 💼 **Role & Tech Stack Customization:** Tailor interviews to specific roles, experience levels, and technologies.
- 📊 **Interview History:** Track your progress and review feedback from past interviews.
- 👥 **Community Interviews:** Access and take interviews created by other users.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun
- Firebase project with Firestore and Authentication enabled
- API keys for [Vapi AI](https://vapi.ai), [Google AI](https://ai.google.com), and [Deepgram](https://deepgram.com) (for voice and transcription features)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/prepcrack.git
   cd prepcrack
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add the following (replace with your actual credentials):

   ```
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `app/` – Next.js app directory (routes, layouts, pages)
- `components/` – Reusable React components
- `constants/` – Static data and configuration
- `firebase/` – Firebase client and admin setup
- `lib/` – Utility functions and server actions
- `types/` – TypeScript type definitions
- `public/` – Static assets (images, icons, etc.)

## Customization

- **Interview Questions:** The AI generates questions based on the selected role, level, and tech stack.
- **Feedback Categories:** Feedback is structured into communication, technical knowledge, problem-solving, cultural fit, and confidence.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org)
- [Vapi AI](https://vapi.ai)
- [Google AI](https://ai.google.com)
- [Deepgram](https://deepgram.com)
- [Firebase](https://firebase.google.com)
