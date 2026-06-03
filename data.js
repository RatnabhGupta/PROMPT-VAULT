// PromptVault Data Registry
// This structured data serves as the single source of truth for prompts, tools, and workflows.
// It is designed to be easily accessible globally for Vanilla JS, and simple to export for future React migrations.

const PromptVaultData = {
  // 1. AI TOOLS DIRECTORY DATA
  tools: [
    {
      id: "claude",
      category: "coding",
      name: "Claude 3.5 Sonnet",
      developer: "Anthropic",
      logo: "claude", // Refers to SVG icon key
      bestFor: ["Advanced Coding", "System Architecture", "Refactoring & Debugging", "Complex Problem Solving"],
      description: "Exceptional at understanding complex software requirements, generating elegant clean code, and tracking broad system context.",
      utility: "Code & Logic",
      rating: "9.8/10",
      accent: "#D97706",
      url: "https://claude.ai"
    },
    {
      id: "cursor",
      category: "coding",
      name: "Cursor AI",
      developer: "Anysphere",
      logo: "cursor",
      bestFor: ["Whole Codebase Editing", "Rapid Prototyping", "Auto-debugging", "Context-Aware Coding"],
      description: "An AI-first code editor built on VS Code. Seamlessly reads your entire workspace and edits multiple files concurrently.",
      utility: "Integrated IDE",
      rating: "9.7/10",
      accent: "#00ADFF",
      url: "https://cursor.com"
    },
    {
      id: "copilot",
      category: "coding",
      name: "GitHub Copilot",
      developer: "GitHub / OpenAI",
      logo: "github",
      bestFor: ["Boilerplate Generation", "Inline Autocomplete", "Fast Syntax Writing"],
      description: "Your trusty inline AI pair programmer. Excellent for autocomplete, writing regular expressions, and fast code completion.",
      utility: "Inline Helper",
      rating: "8.9/10",
      accent: "#24292F",
      url: "https://github.com/features/copilot"
    },
    {
      id: "notebooklm",
      category: "learning",
      name: "NotebookLM",
      developer: "Google",
      logo: "notebooklm",
      bestFor: ["Studying PDFs/Syllabus", "Creating Audio Overviews", "Synthesizing Lecture Notes"],
      description: "A personalized AI collaborator. Upload your lectures, textbooks, and notes to create instant interactive study guides and podcasts.",
      utility: "Document Synthesis",
      rating: "9.9/10",
      accent: "#0F9D58",
      url: "https://notebooklm.google"
    },
    {
      id: "chatgpt",
      category: "learning",
      name: "ChatGPT",
      developer: "OpenAI",
      logo: "openai",
      bestFor: ["Socratic Tutoring", "Concept Brainstorming", "General Explanations"],
      description: "The classic general-purpose assistant. Highly interactive, excellent for conversational tutoring and breaking down complex theories.",
      utility: "Conversational Tutor",
      rating: "9.3/10",
      accent: "#10A37F",
      url: "https://chatgpt.com"
    },
    {
      id: "perplexity",
      category: "research",
      name: "Perplexity AI",
      developer: "Perplexity Inc.",
      logo: "perplexity",
      bestFor: ["Academic Research", "Real-Time Facts", "Citation Sourcing", "Lit Reviews"],
      description: "An AI-powered conversational search engine. Delivers structured, cited answers with references to direct web papers and sources.",
      utility: "Cited Search",
      rating: "9.6/10",
      accent: "#19C37D",
      url: "https://perplexity.ai"
    },
    {
      id: "canva",
      category: "design",
      name: "Canva AI",
      developer: "Canva",
      logo: "canva",
      bestFor: ["Poster & Slides Design", "Social Graphics", "Brand Identity Layouts"],
      description: "Intuitive graphic design suite packed with AI magic edit, image generation, and design helpers tailored for students.",
      utility: "Rapid Visuals",
      rating: "8.8/10",
      accent: "#8B3DFF",
      url: "https://canva.com"
    },
    {
      id: "gamma",
      category: "presentations",
      name: "Gamma App",
      developer: "Gamma",
      logo: "gamma",
      bestFor: ["Instant PPT Generation", "Reports Layout", "Interactive Web Pages"],
      description: "Generates beautiful, fully formatted slide decks and documents from text prompts in seconds. Highly customizable layout editor.",
      utility: "Decks & Docs",
      rating: "9.4/10",
      accent: "#5C17E5",
      url: "https://gamma.app"
    },
    {
      id: "capcut",
      category: "video",
      name: "CapCut AI",
      developer: "ByteDance",
      logo: "capcut",
      bestFor: ["Shorts & Reels Editing", "Auto-captions", "Smart Video Trimming"],
      description: "AI-driven easy video editor with excellent templates, precise auto-captions, dynamic transitions, and quick export.",
      utility: "AI Video Editing",
      rating: "9.0/10",
      accent: "#000000",
      url: "https://capcut.com"
    },
    {
      id: "elevenlabs",
      category: "voice",
      name: "ElevenLabs",
      developer: "ElevenLabs",
      logo: "elevenlabs",
      bestFor: ["Realistic Voiceovers", "Multi-lingual dubbing", "Audiobook creation"],
      description: "The gold standard of generative voice. Synthesizes human-grade voiceovers with accurate emotional tone, pacing, and inflection.",
      utility: "AI Text-to-Speech",
      rating: "9.5/10",
      accent: "#EE5D43",
      url: "https://elevenlabs.io"
    },
    {
      id: "midjourney",
      category: "image",
      name: "Midjourney",
      developer: "Midjourney Inc.",
      logo: "midjourney",
      bestFor: ["Ultra-realistic art", "Concept visual ideation", "Illustration Design"],
      description: "State-of-the-art artistic text-to-image engine. Generates cinematic, highly detailed graphics perfect for project headers and mockups.",
      utility: "Artistic Generation",
      rating: "9.5/10",
      accent: "#7000FF",
      url: "https://midjourney.com"
    },
    {
      id: "dalle",
      category: "image",
      name: "DALL-E 3",
      developer: "OpenAI",
      logo: "dalle",
      bestFor: ["Vector designs", "Accurate text in images", "Clean diagram assets"],
      description: "Integrated directly inside ChatGPT. Excellent at following precise instructions and rendering text correctly in generated graphics.",
      utility: "Precise Concept Art",
      rating: "9.0/10",
      accent: "#10A37F",
      url: "https://openai.com/dall-e-3"
    }
  ],

  // 2. STUDENT PROMPT LIBRARY DATA (9 Categories, 3 high-value prompts each = 27 Prompts)
  prompts: {
    study: [
      {
        title: "The Socratic Feynman Tutor",
        description: "Translate complex academic jargon into simple explanations while testing your understanding using the Feynman Technique.",
        badge: "Active Recall",
        prompt: `Act as a brilliant, supportive Socratic professor. I want to learn the concept of: [INSERT CONCEPT HERE] (e.g., Fourier Transform, Bellman Equation, MVC Architecture).

Follow these rules:
1. Explain the concept in 3 levels of difficulty:
   - Level 1: "Explain like I'm 10" (using a highly creative real-world analogy).
   - Level 2: The standard conceptual engineering breakdown (the 'how' and 'why').
   - Level 3: A concrete, practical code or mathematical formulation.
2. Once the explanation is complete, do not continue explaining. Stop and ask me one targeted, open-ended diagnostic question about the concept to test my understanding.
3. Wait for my response. When I answer:
   - If I am correct, validate and level-up my knowledge with a quick, advanced nugget.
   - If I am partially or fully incorrect, gently guide me back using Socratic questioning rather than just giving away the solution.`
      },
      {
        title: "Interactive Syllabus Syllabus-to-Study-Guide",
        description: "Transform raw lecture notes or textbook syllabus outlines into structured active recall study tables.",
        badge: "Exam Prep",
        prompt: `Act as an expert Academic Coach specializing in cognitive science and active recall. I am going to provide you with my lecture notes or syllabus outline.

Your task is to convert it into a highly actionable Study Blueprint.
Format the output as a Markdown document containing:
1. **Core Summary Table**: Columns: [Topic, High-Yield Concept, Why It Matters, Common Catch-Points/Tricky Nuances].
2. **Q&A Flashcard Deck**: Generate 10 high-value, conceptual Q&A pairs written in a Active Recall style (e.g., "What triggers X, and how does that differ from Y?"). Do not write simple definition questions.
3. **The 'Trap' Guide**: Detail 3 common mistakes students make on college exams when writing about this specific topic.

Here are the notes:
[PASTE NOTES / SYLLABUS HERE]`
      },
      {
        title: "Mental Model Simulator",
        description: "Supercharge your brain by applying famous mental models (First Principles, Second-Order Thinking) to your study subjects.",
        badge: "Deep Learning",
        prompt: `Act as an expert Cognitive Strategist. I want to deeply understand: [INSERT TOPIC/SYSTEM HERE] (e.g., Bitcoin consensus protocol, Photosynthesis, Compilers).

Analyze this system through the lens of these 3 Mental Models:
1. **First Principles Thinking**: Deconstruct the system down to its absolute, most fundamental, undeniable truths. Then, explain how the entire complex system is constructed upwards from these truths.
2. **Second-Order Thinking**: What are the direct consequences of this system, and what are the downstream, indirect consequences (the consequences of the consequences)?
3. **Map is Not the Territory**: Identify what models, diagrams, or assumptions standard textbooks use to explain this concept, and reveal what real-world complexities those models leave out.`
      }
    ],
    dsa: [
      {
        title: "Socratic LeetCode Tutor",
        description: "Get guided hints for Data Structures and Algorithms questions without getting the raw solution spoiled.",
        badge: "Coding Interview",
        prompt: `Act as a senior software engineer conducting a technical coding interview. I am struggling with the following LeetCode/DSA problem: [INSERT PROBLEM DESCRIPTION OR CODING ATTEMPT].

Your goal is to guide me to the correct algorithm and code *without* giving me the solution directly.
Follow this step-by-step coaching protocol:
1. **Clarify**: Ask 2 short questions that check if I understand the constraints (e.g., time/space complexity limits, edge cases like empty arrays or negative integers).
2. **Mental Sandbox**: Provide a small, custom input example and ask me to walk through how *I* would solve it manually (using pencil and paper) step-by-step.
3. **Optimize**: Once I explain the brute force, ask a targeted question that nudges me towards the optimal data structure (e.g., "Is there a way we can look up values in O(1) time instead of nested loops?").
4. Keep all responses under 150 words. Do not write any code blocks unless I explicitly ask you to review my code syntax.`
      },
      {
        title: "Big-O Time & Space Auditor",
        description: "Analyze any code block's complexity line-by-line, showing worst-case, best-case, and average-case limits.",
        badge: "Optimization",
        prompt: `Act as an elite Algorithm Performance Specialist. I will provide you with a code snippet.

Your task is to perform a rigorous Time and Space Complexity Audit.
Provide:
1. **Line-by-Line Cost**: Write down which lines consume memory or time, and specify their cost (e.g., O(N), O(1)).
2. **Complexity Table**:
   - Time Complexity: Best Case, Average Case, Worst Case (using Big-O notation).
   - Space Complexity: Auxiliary Space vs. Total Space.
3. **Bottleneck Analysis**: Pinpoint the exact line or block causing the highest overhead and explain *why* it is a bottleneck.
4. **Optimized Refactoring**: Provide an optimized version of the code that improves the Big-O limit, explaining what data structures or algorithms you changed.

Here is the code:
[PASTE CODE HERE]`
      },
      {
        title: "Algorithm Visualizer (ASCII & Text)",
        description: "Translate complex dry data structures (trees, graphs, lists) into dynamic text-based step-by-step drawings.",
        badge: "Visual Learning",
        prompt: `Act as an educational computer science illustrator. I want to visualize how the following algorithm works on an input: [INSERT ALGORITHM & INPUT] (e.g., Merge Sort on [4, 1, 9, 3], AVL Tree insertion of 12).

Generate a clear, step-by-step, text-based visual simulation.
For each step, show:
1. **ASCII Visual Representation**: Draw the array, tree, graph, stack, or pointer positions using clean ASCII text.
2. **Pointer State**: Detail where variables (like 'left', 'right', 'pivot', 'fast', 'slow') are currently pointing.
3. **Action log**: A short one-line explanation of what changed in this exact step.
4. **Memory State**: What is currently residing on the Call Stack or heap.`
      }
    ],
    programming: [
      {
        title: "Clean Code & Refactoring Expert",
        description: "Refactor messy spaghetti code into clean, scalable, design-pattern-friendly code.",
        badge: "Software Craft",
        prompt: `Act as an expert Principal Software Engineer. I am going to give you a code snippet that works but is messy, poorly structured, or difficult to scale.

Your task is to refactor it.
Provide:
1. **Smell Diagnostic**: List 3 "code smells" present in the code (e.g., tight coupling, magic numbers, violation of Single Responsibility Principle).
2. **Refactored Code**: Write the elegant, refactored version of the code. Follow clean code principles (clear variable names, modular functions, proper error handling, comments).
3. **Design Patterns Applied**: Explain what architectural choices or design patterns (e.g., Factory, Strategy, Observer) you used and *why*.

Here is the code:
[PASTE CODE HERE]`
      },
      {
        title: "The Ultimate Debugger & Edge Case Hunter",
        description: "Simulate a compiler to find hidden memory leaks, race conditions, edge cases, and runtime exceptions.",
        badge: "Debugging",
        prompt: `Act as a Senior System Debugger and Security Auditor. I have this piece of code that is failing or vulnerable: [PASTE CODE HERE].

Analyze this code and generate a thorough Debugging Report:
1. **Root Cause**: Identify the exact line and logic causing the failure, crash, or vulnerability.
2. **Edge Cases**: List 5 extreme edge cases (e.g., null pointers, integer overflows, concurrency race conditions, memory leaks, invalid user inputs) and explain how this code behaves under each.
3. **Fix Draft**: Provide a robust, secure, and fully patched version of the code.
4. **Prevention Strategy**: Give me 2 unit tests written in the project's native testing framework to catch this bug in CI/CD pipelines.`
      },
      {
        title: "API & System Architecture Sketcher",
        description: "Design structured, scalable backend APIs (REST/GraphQL) with proper endpoint schemas.",
        badge: "Backend Design",
        prompt: `Act as a Principal System Architect. I want to build a backend service for: [INSERT SYSTEM IDEA] (e.g., a real-time collaborative code editor, a campus food delivery app).

Draft a comprehensive API and System Architecture Blueprint.
Provide:
1. **Database Schema**: A clean markdown table representing the relational or non-relational tables, columns, data types, and primary/foreign key relationships.
2. **API Endpoint Registry**: Standard REST endpoints or GraphQL schemas. For each, show:
   - Method + Path (e.g., POST /api/v1/auth/register)
   - Headers & Request Body (JSON format)
   - Success Response (200/201 OK JSON)
   - Error Response (400/401/422 JSON)
3. **Scale Strategy**: Recommend a caching, indexing, or database-sharding strategy when this app scales to 10,000 active concurrent campus users.`
      }
    ],
    resume: [
      {
        title: "ATS-Optimized Bullets Builder",
        description: "Transform boring list of duties on your resume into high-impact, STAR-method metrics statements.",
        badge: "STAR Method",
        prompt: `Act as an elite Technical Recruiter who screens candidates for Google, Stripe, and high-growth startups. I will provide you with a bullet point from my resume: [INSERT BULLET POINT] (e.g., "Helped develop a web app for a student club").

Your task is to rewrite this bullet point to make it exceptionally impactful using the STAR (Situation, Task, Action, Result) method and Google's X-Y-Z formula ("Accomplished [X] as measured by [Y], by doing [Z]").

Provide 3 distinct options, ranking them by technical sophistication:
- **Option 1 (Engineering-focused)**: Emphasizes tools used, code quality, testing, and clean architecture.
- **Option 2 (Impact-focused)**: Emphasizes user growth, performance optimization, speed improvements, or cost reductions.
- **Option 3 (Leadership-focused)**: Emphasizes collaboration, project management, and cross-functional coordination.

Include a 1-sentence breakdown for each explaining *why* it is stronger than my original bullet.`
      },
      {
        title: "Job-Description Alignment Auditor",
        description: "Analyze a job description and match your resume to target keyword gaps, showing exactly what to add.",
        badge: "Tailoring",
        prompt: `Act as an ATS (Applicant Tracking System) Scanner and Recruiter. I will provide you with two pieces of text:
1. **Target Internship Job Description**: [PASTE JOB DESCRIPTION]
2. **My Current Resume**: [PASTE RESUME]

Perform a comparative analysis and provide:
1. **Match Score**: A realistic match percentage (0% to 100%).
2. **Keyword Gap Analysis**: List key technical keywords, languages, and frameworks present in the job description that are missing or underrepresented in my resume.
3. **Tailored Actions**: Give me 3 specific bullet points on my current resume to modify, showing the exact "Before" and "After" versions to align directly with the target role's key deliverables.`
      },
      {
        title: "GitHub Portfolio-to-Resume Synthesizer",
        description: "Translate your raw GitHub repositories and project descriptions into professional resume sections.",
        badge: "Portfolio Development",
        prompt: `Act as a Technical Portfolio Reviewer. I will paste a description of a software project I built, including the tech stack, features, and struggles: [PASTE PROJECT DETAILS OR README FILE].

Convert this raw project narrative into a stunning, resume-ready **Projects Section** block.
Provide:
1. **Project Title Header**: (e.g., *PromptVault – Responsive Digital Notebook Web Application | HTML5, CSS3, ES6 JS*).
2. **3 High-Impact Resume Bullets**: Each bullet must start with a strong action verb, detail the technical implementation choice, and quantify a realistic result (e.g., optimized rendering by 40% via lazy loading).
3. **Interview Pivot**: A 2-sentence "Talking Points Guide" telling me how to explain this project during a live technical interview (e.g., how to describe the biggest challenge and how I solved it).`
      }
    ],
    linkedin: [
      {
        title: "The CS Builder Storytelling Hook Writer",
        description: "Draft viral, educational LinkedIn hooks about your coding projects without sounding cringe or boastful.",
        badge: "Public Learning",
        prompt: `Act as a creative copywriter specializing in developer storytelling and building in public. I want to write a LinkedIn post about: [INSERT TECH JOURNEY/PROJECT UPDATE] (e.g., "I just built an SVG compiler in HTML and CSS").

Your goal is to write 5 different high-converting, professional **Hooks** (the first 2 lines of the post) that capture attention without sounding overly promotional or cheesy.
Provide:
- **Style 1: The 'Fail-to-Win' Hook** (Starts with a core engineering struggle/bug, ends with the ultimate lesson).
- **Style 2: The Data-Driven Hook** (Focuses on metrics, performance, or hours spent).
- **Style 3: The 'Unpopular Opinion' Hook** (Challenges a standard piece of advice or coding tutorial).
- **Style 4: The 'Syllabus vs. Reality' Hook** (Compares what they teach in college classes with what you actually built).
- **Style 5: The Visual / Behind-the-Scenes Hook** (Sets up a video demo or screenshot layout).`
      },
      {
        title: "Build-in-Public Project Post Creator",
        description: "Translate a raw codebase project milestone into an engaging, structured 'Build in Public' story.",
        badge: "Storytelling",
        prompt: `Act as a developer relations manager and LinkedIn creator. I am building a project called [PROJECT NAME] and just completed [MILESTONE] (e.g., added dark mode, optimized database queries, launched on GitHub).

Write a highly engaging, structured, non-cringe LinkedIn post.
Use the following format:
1. **The Hook**: Captivating, clean opening statement.
2. **The Problem**: A technical challenge I faced (e.g., DOM paint lag, complex CSS inheritance).
3. **The Solution**: How I used my engineering skills (and maybe some AI helper strategies) to overcome it.
4. **The Tech Stack**: List of tools used.
5. **Key Takeaway**: A lesson that other student builders can immediately use.
6. **Call to Action**: Invite feedback or invite people to review the code.

Keep the tone professional, humble, enthusiastic, and highly educational. Avoid excessive emojis.`
      },
      {
        title: "Tech Event & Hackathon Recap Writer",
        description: "Summarize a hackathon, conference, or student tech event into an engaging professional networking post.",
        badge: "Networking",
        prompt: `Act as a professional storyteller. I just attended/completed: [INSERT HACKATHON/EVENT NAME] where my team built [PROJECT] and we [WON A PRIZE / LEARNED X].

Write a compelling recap post for LinkedIn.
Focus on:
1. **Gratitude and Teamwork**: Highlight my incredible teammates (mentioning their roles).
2. **The Hackathon Hustle**: Describe the intense 24/48-hour journey, the pivots, and the sleepless debugging sessions.
3. **The Pitch & Feedback**: Explain how we presented our solution to the judges.
4. **Key Learnings**: 3 valuable professional or technical lessons learned during the stress-test.
5. **Call to Action**: Link to the Devpost/GitHub and tag organizers.

Make the narrative feel authentic, exciting, and highly collaborative.`
      }
    ],
    hackathons: [
      {
        title: "The 30-Minute Hackathon Ideation Matrix",
        description: "Generate unique, high-utility hackathon ideas tailored to specific track themes (Fintech, Sustainability, EdTech).",
        badge: "Brainstorming",
        prompt: `Act as an award-winning Hackathon Mentor. The track for my upcoming hackathon is: [INSERT TRACK/THEME] (e.g., AI in Education, Decarbonization, Healthcare Accessibility).

Generate a **Hackathon Ideation Matrix** containing 3 distinct, high-concept project ideas.
For each project, provide:
1. **Core Concept Name**: A catchy, startup-style name.
2. **The Pitch**: A 1-sentence description of the problem and the proposed solution.
3. **The "Wow" Factor**: What cutting-edge feature, API, or integration (e.g., Whisper API, WebRTC, vector database) will make the judges lean forward?
4. **MVP Plan (24-Hour Scope)**: A realistic, hour-by-hour division of labor (Frontend, Backend, Design) to ensure a working product is delivered in 24 hours.`
      },
      {
        title: "The 3-Minute Interactive Judge Pitch",
        description: "Draft a high-impact verbal presentation pitch script for hackathon judges, highlighting problems, solutions, and stack.",
        badge: "Presentation",
        prompt: `Act as a Hackathon Pitch Coach. We built a project called: [PROJECT NAME] which is a [WHAT IT DOES] using [TECH STACK].

Write a highly engaging, high-scoring **3-Minute Presentation Pitch Script** designed for the judges.
Structure the script into clear, timed segments:
1. **0:00 - 0:30: The Hook & The Pain** (Tell a fast, relatable story about the user suffering from the problem).
2. **0:30 - 1:15: The Reveal & The Demo** (Introduce the product as the hero and script the exact actions to show in the live demo).
3. **1:15 - 2:00: Technical Sophistication** (Explain the architecture, how we solved a complex engineering hurdle, and why the system is robust).
4. **2:00 - 2:40: Future Scale & Business Value** (Explain where we would take this next and how it can be monetized or scaled).
5. **2:40 - 3:00: The Knockout Outro** (A memorable closing statement that aligns with the hackathon's core vision).`
      },
      {
        title: "Hackathon Devpost Writeup Builder",
        description: "Synthesize your project features, struggles, and stack into a polished, high-scoring Devpost submission page.",
        badge: "Submission",
        prompt: `Act as an expert technical writer. I need to write a Devpost submission page for our hackathon project:
- Project Name: [NAME]
- Elevator Pitch: [PITCH]
- Tech Stack: [STACK]
- What we learned / struggles: [DETAILS]

Write a highly structured, professional Devpost description.
Use the following standard Devpost headers:
- **Inspiration**: The backstory and why we chose to build this.
- **What it does**: A clear, feature-by-feature breakdown of the application.
- **How we built it**: The architectural flow, tech stack, and API integrations.
- **Challenges we ran into**: Honest engineering struggles (concurrency, APIs, UI layout) and how we triumphed.
- **Accomplishments that we're proud of**: The technical and team milestones achieved.
- **What we learned**: New frameworks, team dynamics, or tools mastered in 48 hours.
- **What's next for [PROJECT NAME]**: The roadmap for the future.`
      }
    ],
    productivity: [
      {
        title: "The CS Student System Builder",
        description: "Design a customized weekly study-and-build schedule that balances lectures, coding projects, and rest.",
        badge: "Time Management",
        prompt: `Act as an elite Systems Designer specializing in personal productivity. I am a Computer Science student. Here are my current obligations:
- Lecture Hours: [e.g., 15 hours/week]
- Active Coding Projects: [e.g., Building PromptVault portfolio]
- Core Struggles: [e.g., Procrastination on coding, exam cramming]
- Sleep Schedule: [e.g., 7 hours/night]

Create a highly personalized **Weekly Systems Blueprint**.
Include:
1. **The Time-Block Framework**: A weekly schedule division optimized for deep work (coding/building) vs. shallow work (emails, assignments, administration).
2. **The "Minimum Viable Day" Protocol**: What are the absolute minimum 3 habits I must complete on days when I have zero energy to prevent broken streaks?
3. **Tool Integrations**: Recommend a setup using Notion, Google Calendar, or Todoist to keep this system automated and friction-free.`
      },
      {
        title: "The Ultimate Syllabus-to-Study-Schedule Planner",
        description: "Break down complex, terrifying exam syllabi into comfortable, daily micro-learning sessions.",
        badge: "Task Planning",
        prompt: `Act as a student productivity consultant. I have an upcoming final exam in [SUBJECT] (e.g., Database Management Systems, Operating Systems) in [NUMBER] days.

Here is the syllabus: [PASTE SYLLABUS OR CHAPTER LIST].

Create a highly detailed **Day-by-Day Exam Sprint Plan**.
For each day, provide:
1. **Core Study Topic**: Which sub-chapter to master.
2. **Active Recall Prompt**: A specific question I must be able to answer from memory by the end of the day.
3. **Spaced Repetition Schedule**: When to quickly review this topic again in future days (e.g., Review Day 1 on Day 3 and Day 7) to lock it into long-term memory.`
      },
      {
        title: "Project Scope Minimizer (Avoid Over-Engineering)",
        description: "De-clutter your massive software ideas into highly realistic, weekend-scopable Minimum Viable Products.",
        badge: "Scope Control",
        prompt: `Act as an agile Product Manager. I want to build a software project: [INSERT HUGE PROJECT IDEA] (e.g., a real-time decentralized campus social network).

I have a tendency to over-engineer and never launch.
Your task is to **aggressively de-scope** this project into a highly realistic, 3-day MVP.
Provide:
1. **The Slash List**: Tell me exactly what 5 shiny features I must cut from my initial build and why they are distractions.
2. **The Core MVP Specs**: Detail the absolute bare minimum pages, database tables, and API routes that are required to make the app functional.
3. **The 3-Day Execution Timeline**:
   - Day 1: Schema & Backend Foundation.
   - Day 2: Core UX/UI & Integration.
   - Day 3: Edge Case Patching & Deployment.
4. **The "Launch Ready" Test**: What single flow must work perfectly for me to declare this project successfully launched?`
      }
    ],
    research: [
      {
        title: "Academic Paper Deconstructor",
        description: "Extract core methodologies, limitations, and future scopes from dry, dense scientific PDFs.",
        badge: "Literature Review",
        prompt: `Act as a world-class Research scientist. I am going to provide you with the abstract or contents of an academic research paper.

Your task is to perform a rigorous **Paper Deconstruction Analysis**.
Provide the output in structured markdown format:
1. **The Core Claim**: What primary problem does this paper solve, and what is their new contribution in plain English?
2. **Methodology Breakdown**: How did they build and test their solution?
3. **The "Fine Print" (Limitations)**: What are the unaddressed limitations, sample size biases, or structural weaknesses in their approach?
4. **Future Extensions**: List 3 concrete project ideas that *I* (as an undergraduate CS student) can build by extending this research.

Here is the paper text:
[PASTE TEXT / ABSTRACT HERE]`
      },
      {
        title: "The Lit-Review Matrix Generator",
        description: "Map and contrast multiple source papers into a clean comparative research matrix table.",
        badge: "Literature Mapping",
        prompt: `Act as a Senior Academic Advisor. I am writing a research paper on the topic of: [INSERT TOPIC] (e.g., Vector DB optimization, Transformer latency, Zero-Knowledge Proofs).

I will paste a series of paper summaries/abstracts.
Create a **Literature Review Matrix Table** with the following columns:
- Column 1: Paper Title & Authors
- Column 2: Key Methodology
- Column 3: Primary Metric achieved (e.g., accuracy, speedup)
- Column 4: Major Constraint or Assumption
- Column 5: How it relates to my target topic

After the table, write a 2-paragraph synthesis summarizing the overall trends, gaps, and consensus across these papers.

Here are the abstracts:
[PASTE PAPERS / ABSTRACTS HERE]`
      },
      {
        title: "Patent Concept Summarizer",
        description: "Translate complex legal patent claims into clean, understandable engineering system flows.",
        badge: "IP Discovery",
        prompt: `Act as a Patent Attorney and System Architect. I have found this patent description: [PASTE PATENT SUMMARY OR CLAIMS SECTION].

Translate this dense legal-technical jargon into a clear, understandable Engineering Guide.
Provide:
1. **Core Invention**: In 2 sentences, what exactly is the unique invention?
2. **System Flow Diagram Description**: Describe how the components connect and interact step-by-step.
3. **Patent Loophole Analysis**: From an engineering perspective, how could one build a similar system *without* violating the specific legal claims outlined in the patent?`
      }
    ],
    career: [
      {
        title: "The Tech Career Pivot Map",
        description: "Design a customized skill-learning roadmap to transition from college classes to specialized industry roles.",
        badge: "Roadmapping",
        prompt: `Act as an elite Tech Career Coach. I am a Computer Science student.
- Current Skills: [e.g., Python, basic HTML/CSS]
- Target Role: [e.g., Cloud Engineer, ML Architect, Web3 Developer]
- Remaining Time in College: [e.g., 2 years]

Create a highly strategic **Tech Career Roadmap**.
Provide:
1. **The Tech Stack Stack**: List the exact 5 core libraries, tools, or cloud concepts I must learn, ranked in logical sequential order (prerequisites first).
2. **Milestone Projects**: Describe 3 original, non-generic projects (avoid simple To-Do apps) I should build to prove mastery of these skills.
3. **Certificate & Coding Targets**: Suggest specific open-source contributions, platforms (e.g., LeetCode, AWS Academy), or certifications that are genuinely respected by recruiters in this niche.`
      },
      {
        title: "Cold Email & Networking Pitch Craft",
        description: "Draft highly compelling, personalized cold emails to hiring managers that yield actual interview responses.",
        badge: "Networking",
        prompt: `Act as a cold outreach specialist who has successfully landed interviews through warm networking. I want to write a cold LinkedIn message or email to:
- Target Person's Role: [e.g., Engineering Manager at Stripe]
- Why I'm reaching out: [e.g., Interested in their software engineering internship next summer]
- My Unique Hook: [e.g., I built an open-source payment ledger using their API]

Write 3 custom outreach templates:
- **Template 1: The Short LinkedIn DM** (Under 100 words, highly casual, value-first, low friction).
- **Template 2: The Detailed Cold Email** (Starts with a hyper-personalized compliment on their recent work/blog post, pitches my technical project hook, and requests a 10-minute chat).
- **Template 3: The Student-to-Alumni Hook** (For an alumnus of my university Poornima University, highlighting shared roots).

Include a "Frictionless Call to Action" at the end of each template.`
      },
      {
        title: "First-Round Behavioral Interview Coach",
        description: "Prep for behavioral interview loops by structuring personal stories using the STAR framework.",
        badge: "Interview Prep",
        prompt: `Act as a senior HR director at a top-tier tech firm. I want to prepare for behavioral interview questions.
Here is the core story I want to use: [e.g., "I led my student hackathon team to build a project, and we had a massive conflict about backend languages 6 hours before submission, but we resolved it and finished."].

Help me refine this story using the STAR (Situation, Task, Action, Result) method.
Generate:
1. **Story Structure**:
   - **Situation**: Set the stakes clearly.
   - **Task**: What was *my* exact responsibility?
   - **Action**: What specific technical or collaborative steps did I take? (Emphasize active leadership).
   - **Result**: What was the quantitative and qualitative outcome?
2. **Hurdle Prep**: Give me 3 hard, follow-up behavioral questions an interviewer might ask to test the authenticity of this story, along with tips on how I should answer them.`
      }
    ]
  },

  // 3. AI WORKFLOW FLOW DIAGRAM DATA
  workflows: [
    {
      id: "assignment-creation",
      title: "Academic Assignment Engine",
      subtitle: "Convert dense lecture materials into high-quality assignments and beautiful visual slide summaries.",
      steps: [
        {
          tool: "NotebookLM",
          role: "Syllabus Synthesizer",
          action: "Upload dry PDFs, lecture slides, and transcripts to ingest content, clarify formulas, and map core topics.",
          badge: "Source Ingestion",
          icon: "notebooklm"
        },
        {
          tool: "ChatGPT",
          role: "Creative Tutor & Outline Writer",
          action: "Process NotebookLM's syntheses using the Socratic professor prompt to build elegant, clear written assignment outlines and answers.",
          badge: "Content Draft",
          icon: "openai"
        },
        {
          tool: "Gamma App",
          role: "Presentation Automator",
          action: "Feed the detailed ChatGPT outline into Gamma to auto-design visual slide presentations and document layouts in minutes.",
          badge: "Visual Polish",
          icon: "gamma"
        }
      ],
      result: "High-grade research homework + complete slide deck created in a fraction of the time."
    },
    {
      id: "linkedin-content",
      title: "LinkedIn Brand Builder",
      subtitle: "Find cutting-edge tech topics, write compelling narratives, and design premium social graphics.",
      steps: [
        {
          tool: "Perplexity AI",
          role: "Fact Sifter & Researcher",
          action: "Search real-time tech articles, GitHub updates, and papers to get accurate technical facts and citations.",
          badge: "Fact Collection",
          icon: "perplexity"
        },
        {
          tool: "ChatGPT",
          role: "Storytelling Copywriter",
          action: "Feed cited research into the Build-in-Public Hook prompt to draft highly readable, technical LinkedIn articles.",
          badge: "Engaging Text",
          icon: "openai"
        },
        {
          tool: "Canva AI",
          role: "Visual Graphics Designer",
          action: "Generate an custom sketch background or clean technical infographic aligned to the post text.",
          badge: "Visual Assets",
          icon: "canva"
        }
      ],
      result: "Highly educational, expert-positioned professional content posted in public."
    },
    {
      id: "hackathon-prep",
      title: "Rapid Hackathon Blueprint",
      subtitle: "Ideate high-concept architectures, write core algorithm engines, and pitch to victory in 24 hours.",
      steps: [
        {
          tool: "Perplexity AI",
          role: "Market & Tech Analyst",
          action: "Identify existing open-source codebases, competitor features, and look up developer documentation for niche APIs.",
          badge: "Discovery",
          icon: "perplexity"
        },
        {
          tool: "Claude 3.5 Sonnet",
          role: "System Engineer & Developer",
          action: "Write core database adapters, clean API endpoints, and refactor tricky frontend interface states.",
          badge: "Code Assembly",
          icon: "claude"
        },
        {
          tool: "ChatGPT",
          role: "Devpost Writer & Pitch Coach",
          action: "Formulate the 3-Minute Judge Script and construct the Devpost submission write-up to capture judge focus.",
          badge: "Story & Presentation",
          icon: "openai"
        }
      ],
      result: "Robust, technically sophisticated prototype delivered with a winning presentation."
    }
  ]
};
