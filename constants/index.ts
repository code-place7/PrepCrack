// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api};
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export interface Interview {
  id: string;
  userId: string;
  role: string;
  type: string;
  techstack: string[];
  level: string;
  questions: string[];
  finalized: boolean;
  createdAt: string;
}

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

const monu_interview_prep = {
  name: "monu_interview_prep",
  nodes: [
    {
      name: "introduction",
      type: "conversation",
      isStart: true,
      metadata: {
        position: {
          x: 86.91577202417619,
          y: -503.3406768259967,
        },
      },
      prompt: "Greet the user and help them create a new AI Interviewer",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      voice: {
        voiceId: "Neha",
        provider: "vapi",
      },
      variableExtractionPlan: {
        output: [
          {
            enum: [],
            type: "string",
            title: "level",
            description: "The job experience level",
          },
          {
            enum: [],
            type: "string",
            title: "amount",
            description: "How many questions would you like to generate",
          },
          {
            enum: [],
            type: "string",
            title: "techstack",
            description:
              "A list of technologies to cover during the job interview",
          },
          {
            enum: [],
            type: "string",
            title: "role",
            description:
              "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX?",
          },
          {
            enum: [],
            type: "string",
            title: "type",
            description: "What type of the interview should it be?",
          },
        ],
      },
      messagePlan: {
        firstMessage: "Hey there!",
      },
    },
    {
      name: "API Request",
      type: "tool",
      metadata: {
        position: {
          x: 40.60127494868783,
          y: 231.79000508624028,
        },
      },
      tool: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}api/auth/vapi/generate`,
        body: {
          type: "object",
          required: ["level", "amount", "techstack", "role", "type", "userid"],
          properties: {
            role: {
              type: "string",
              value: "{{ role }}",
              description: "",
            },
            type: {
              type: "string",
              value: "{{ type }}",
              description: "",
            },
            level: {
              type: "string",
              value: "{{ level }}",
              description: "",
            },
            amount: {
              type: "string",
              value: "{{ amount }}",
              description: "",
            },
            userid: {
              type: "string",
              value: "{{userid}}",
              description: "",
            },
            techstack: {
              type: "string",
              value: "{{ techstack }}",
              description: "",
            },
          },
        },
        type: "apiRequest",
        method: "POST",
        function: {
          name: "untitled_tool",
          parameters: {
            type: "object",
            required: [],
            properties: {},
          },
        },
      },
    },
    {
      name: "conversation_1748620587097",
      type: "conversation",
      metadata: {
        position: {
          x: 59.8268935329111,
          y: -93.19555125863187,
        },
      },
      prompt: "Say that the Interview will be generated shortly",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      voice: {
        voiceId: "Neha",
        provider: "vapi",
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "conversation_1748620832903",
      type: "conversation",
      metadata: {
        position: {
          x: 55.13607411358862,
          y: 554.4640009107442,
        },
      },
      prompt:
        " thank the user for their time and informing them that the interview has been generated successfully",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      voice: {
        voiceId: "Neha",
        provider: "vapi",
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "hangup_1748620864566",
      type: "tool",
      metadata: {
        position: {
          x: 70.82837849785952,
          y: 964.3467917246528,
        },
      },
      tool: {
        type: "endCall",
      },
    },
  ],
  edges: [
    {
      from: "introduction",
      to: "conversation_1748620587097",
      condition: {
        type: "ai",
        prompt: "If user provided all the required variables",
      },
    },
    {
      from: "conversation_1748620587097",
      to: "API Request",
      condition: {
        type: "ai",
        prompt: "user said yes",
      },
    },
    {
      from: "API Request",
      to: "conversation_1748620832903",
      condition: {
        type: "ai",
        prompt: "user said yes",
      },
    },
    {
      from: "conversation_1748620832903",
      to: "hangup_1748620864566",
      condition: {
        type: "ai",
        prompt: "user said yes",
      },
    },
  ],
  globalPrompt:
    "You are a voice assistant helping with creating new AI interviewers. Your task is to collect data from the user. Remember that this is a voice conversation - do not use any special characters.",
};

export default monu_interview_prep;
