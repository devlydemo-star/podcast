export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  longDescription?: string;
  duration: string;
  durationSeconds: number;
  releaseDate: string;
  category: 'Startups' | 'Technology' | 'AI & Tech' | 'Productivity' | 'Personal Growth' | 'Building in Public' | 'Founder Stories' | 'Learning';
  tags: string[];
  thumbnail: string;
  spotifyUrl: string;
  youtubeUrl: string;
  audioPreviewToneFrequency?: number;
  featured?: boolean;
  takeaways: string[];
}

export interface StatMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface TopicItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  gradient: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  keyLesson: string;
}

export interface FounderQuote {
  id: string;
  quote: string;
  context: string;
  theme: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  platform: 'Spotify' | 'Apple Podcasts' | 'YouTube' | 'Twitter';
  rating: number;
}

export const SHOW_INFO = {
  name: "The Young Founder Show",
  host: "Maher Dhami",
  tagline: "Real Stories. Real Lessons. A Brighter Tomorrow.",
  mission: "A podcast documenting the real journey of a young founder building products, learning from mistakes, sharing experiences, startup lessons, personal growth, technology insights, and the process of becoming a better entrepreneur.",
  spotifyShowUrl: "https://open.spotify.com/show/theyoungfoundershow",
  youtubeChannelUrl: "https://youtube.com/@maherdhami",
  socialLinks: {
    spotify: "https://open.spotify.com",
    youtube: "https://youtube.com/@maherdhami",
    linkedin: "https://linkedin.com/in/maherdhami",
    twitter: "https://x.com/maherdhami",
    instagram: "https://instagram.com/maherdhami",
    github: "https://github.com/maherdhami",
    whatsapp: "https://fomr.io/s/xaGYWAe4Ul",
  },
  whatsappCommunityUrl: "https://fomr.io/s/xaGYWAe4Ul",
  communityFormUrl: "https://fomr.io/s/xaGYWAe4Ul",
  coverImage: "/images/show_badge.jpg",
  hostImage: "/images/host_maher.jpg",
};

export const PODCAST_STATS: StatMetric[] = [
  {
    id: "episodes",
    label: "Episodes Published",
    value: 24,
    suffix: "+",
    description: "Weekly raw, unfiltered breakdowns"
  },
  {
    id: "downloads",
    label: "Total Downloads",
    value: 45,
    suffix: "k+",
    description: "Across Spotify, Apple & YouTube"
  },
  {
    id: "community",
    label: "Community Members",
    value: 12,
    suffix: ".5k+",
    description: "Student builders, founders & devs"
  },
  {
    id: "countries",
    label: "Countries Reached",
    value: 68,
    suffix: "+",
    description: "Global audience of next-gen creators"
  }
];

export const TOPICS: TopicItem[] = [
  {
    id: "startups",
    title: "Startups",
    icon: "🚀",
    description: "From zero to product-market fit, early validation, customer discovery, and bootstrapping.",
    gradient: "from-teal-500/20 to-emerald-500/10"
  },
  {
    id: "technology",
    title: "Technology",
    icon: "💻",
    description: "Modern full-stack frameworks, reactive architecture, distributed systems, and modern web tooling.",
    gradient: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "🤖",
    description: "Practical LLM agents, local models, autonomous dev workflows, and building AI-first software.",
    gradient: "from-emerald-400/20 to-teal-600/10"
  },
  {
    id: "learning",
    title: "Learning",
    icon: "📚",
    description: "Escaping tutorial hell, self-taught engineering mastery, and learning complex systems in public.",
    gradient: "from-teal-400/20 to-cyan-700/10"
  },
  {
    id: "productivity",
    title: "Productivity",
    icon: "🎯",
    description: "High-leverage time blocking, beating context switching, and executing at 10x velocity as a student.",
    gradient: "from-blue-500/20 to-indigo-500/10"
  },
  {
    id: "personal-growth",
    title: "Personal Growth",
    icon: "🌱",
    description: "Mental resilience, handling self-doubt, developing extreme ownership, and founder psychology.",
    gradient: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "building-in-public",
    title: "Building in Public",
    icon: "🏗",
    description: "Sharing revenue metrics, transparent retrospectives, building trust, and authentic community growth.",
    gradient: "from-teal-500/20 to-sky-500/10"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    icon: "💡",
    description: "Pricing psychology, negotiation, building defensible moats, and turning problems into viable ventures.",
    gradient: "from-cyan-400/20 to-emerald-500/10"
  }
];

export const EPISODES: Episode[] = [
  {
    id: "ep-24",
    number: 24,
    title: "From Zero to DevLy: What Nobody Tells You About Building Your First SaaS in College",
    description: "Maher unpacks the raw truth of launching DevLy while balancing college exams, finding initial beta users, fixing fatal database bottlenecks at 3 AM, and the psychological shift from student coder to SaaS founder.",
    longDescription: "Building DevLy wasn't a fairy-tale Silicon Valley story. In this episode, Maher Dhami opens up his Notion logs, Git commits, and early analytics dashboards. We talk about the terrifying feeling of shipping to the first 50 strangers, why 80% of feature requests were distractions, how we engineered a fast real-time synchronization layer, and the exact habits that kept DevLy alive while attending morning lectures.",
    duration: "42 min",
    durationSeconds: 2520,
    releaseDate: "Sep 18, 2026",
    category: "Startups",
    tags: ["SaaS", "DevLy", "College Founder", "Bootstrapping"],
    thumbnail: "/images/ep_devly.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 220,
    featured: true,
    takeaways: [
      "Ship an embarrassing v0 rather than polishing a product nobody wants.",
      "Customer support in your first 90 days is your strongest product roadmapping tool.",
      "How to protect 4 uninterrupted deep-work hours every single day regardless of college schedules."
    ]
  },
  {
    id: "ep-23",
    number: 23,
    title: "The CODIEPAG Story: 5 Mistakes That Nearly Broke My Confidence",
    description: "Before DevLy succeeded, CODIEPAG taught Maher the brutal realities of scope creep, vanity metrics, and launching without customer discovery. The raw breakdown of why early failure is the best tuition.",
    longDescription: "Most founders only post about their wins on LinkedIn. But CODIEPAG was Maher's greatest teacher. In this episode, he breaks down the painful post-mortem: building for 6 months in stealth mode without validating, over-engineering microservices for 12 users, and the emotional toll of shuttering the original roadmap before pivoting.",
    duration: "38 min",
    durationSeconds: 2280,
    releaseDate: "Sep 11, 2026",
    category: "Founder Stories",
    tags: ["CODIEPAG", "Failure", "Resilience", "Pivoting"],
    thumbnail: "/images/ep_codiepag.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 246,
    featured: false,
    takeaways: [
      "Never write a single line of backend logic before talking to 15 prospective users.",
      "Vanity traffic is not product validation: focus purely on retention and willingness to pay.",
      "Failure isn't fatal; it's just compressed learning."
    ]
  },
  {
    id: "ep-22",
    number: 22,
    title: "AI Agents & Autonomous Coding: The 2026 Developer Playbook",
    description: "Deep dive into how modern solopreneurs and small engineering teams use AI agents to out-build 20-person legacy startups. Architecture breakdown, prompt chaining, and real workflows.",
    longDescription: "AI coding tools have moved way past basic autocomplete. In this episode, Maher demonstrates how he leverages agentic coding workflows to prototype full-stack features in hours rather than weeks, alongside the common pitfalls like subtle hallucination bugs, architecture drift, and why strong computer science fundamentals matter more now than ever.",
    duration: "46 min",
    durationSeconds: 2760,
    releaseDate: "Sep 04, 2026",
    category: "AI & Tech",
    tags: ["AI Agents", "Autonomous Coding", "Next.js", "Full Stack"],
    thumbnail: "/images/ep_ai.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 293,
    featured: false,
    takeaways: [
      "How to set up modular architecture so AI agents don't break side-effects.",
      "Automated verification test suites are the true superpower of agentic coding.",
      "Why product taste and domain knowledge are the ultimate differentiators."
    ]
  },
  {
    id: "ep-21",
    number: 21,
    title: "Building in Public: How Transparency Became My Greatest Growth Engine",
    description: "Why sharing MRR, bug postmortems, and rejections on X and LinkedIn attracted early investors, loyal community members, and first enterprise design partners.",
    longDescription: "When Maher began sharing weekly build logs, some warned him that competitors would steal his ideas. Instead, it created an unassailable distribution flywheel. This episode breaks down the art of building in public without sounding like an engagement-farming bot.",
    duration: "35 min",
    durationSeconds: 2100,
    releaseDate: "Aug 28, 2026",
    category: "Building in Public",
    tags: ["Build In Public", "Distribution", "Community", "Audience"],
    thumbnail: "/images/community.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 329,
    featured: false,
    takeaways: [
      "Share your doubts, rejections, and raw metrics — authentic vulnerability builds deep trust.",
      "The best marketing is documenting the actual work you are already doing.",
      "Turn customer bug reports into public transparency wins."
    ]
  },
  {
    id: "ep-20",
    number: 20,
    title: "Productivity for Crazy Schedules: 18-Hour Days vs. High-Leverage Deep Work",
    description: "How Maher organizes his week between coding sprints, college coursework, podcast recording, and personal health without burning out. The non-negotiable systems that keep the flywheel spinning.",
    longDescription: "Hustle culture tells you to sleep 3 hours a night. Maher tried that, burned out hard, and redesigned his entire operational playbook. In this episode, he breaks down calendar time-boxing, asynchronous delegation, reducing decision fatigue, and maintaining physical and mental stamina.",
    duration: "41 min",
    durationSeconds: 2460,
    releaseDate: "Aug 21, 2026",
    category: "Productivity",
    tags: ["Time Management", "Deep Work", "Burnout", "Execution"],
    thumbnail: "/images/ep_productivity.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 349,
    featured: false,
    takeaways: [
      "Prioritize 3 high-leverage tasks each morning before touching messaging apps.",
      "Energy management trumps time management every single time.",
      "Why guilt-free rest days directly accelerate engineering velocity."
    ]
  },
  {
    id: "ep-19",
    number: 19,
    title: "Self-Taught to Full-Stack: The Modern Roadmap for Young Developers",
    description: "Skipping the tutorial trap. How to go from building simple clone apps to architecting distributed cloud systems, real-time WebSockets, and production-ready applications from scratch.",
    longDescription: "Tutorial purgatory is real: you build another todo app or Netflix clone, but you can't architect a real product. Maher walks through his exact roadmap from learning JavaScript loops in 2021 to deploying high-throughput microservices and relational schemas.",
    duration: "44 min",
    durationSeconds: 2640,
    releaseDate: "Aug 14, 2026",
    category: "Learning",
    tags: ["Programming", "Self Taught", "Full Stack", "Web Dev"],
    thumbnail: "/images/podcast_cover.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 392,
    featured: false,
    takeaways: [
      "Build projects you personally want to use every day — curiosity beats discipline.",
      "Read open source source code instead of watching 40-hour video courses.",
      "Master databases and network fundamentals before jumping to trendy libraries."
    ]
  },
  {
    id: "ep-18",
    number: 18,
    title: "Monetization 101: Landing Your First 10 Paying SaaS Customers",
    description: "Cold outreach that doesn't feel spammy, pricing psychology for developer tools, offering lifetime deals vs. monthly subscriptions, and turning angry trial users into evangelists.",
    longDescription: "Free users give you applause; paying users give you truth. Maher discusses the exact pricing experiments used on DevLy, how to pitch to founders on LinkedIn with personalized Loom teardowns, and how to conquer the emotional hesitation of charging real money.",
    duration: "39 min",
    durationSeconds: 2340,
    releaseDate: "Aug 07, 2026",
    category: "Startups",
    tags: ["Monetization", "First 10 Customers", "Pricing", "Sales"],
    thumbnail: "/images/ep_monetization.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 440,
    featured: false,
    takeaways: [
      "Charge sooner than you feel comfortable with.",
      "High-touch direct outreach is non-scalable, but indispensable in early phases.",
      "An annual discount upfront provides crucial runway and proves commitment."
    ]
  },
  {
    id: "ep-17",
    number: 17,
    title: "The Founder Mindset: Overcoming Imposter Syndrome as a Young Builder",
    description: "Walking into founder meetups when everyone is 10 years older than you. How age is your secret weapon, developing unshakeable conviction, and building things people actually want.",
    longDescription: "When you're 20 years old, it's easy to look around and assume everyone else has credentials, degrees, and venture backing that you lack. Maher dismantles the myth of credentials and explains how beginner's mind, speed, and lack of legacy baggage make young founders dangerous.",
    duration: "36 min",
    durationSeconds: 2160,
    releaseDate: "Jul 31, 2026",
    category: "Personal Growth",
    tags: ["Mindset", "Imposter Syndrome", "Youth Advantage", "Conviction"],
    thumbnail: "/images/ep_mindset.jpg",
    spotifyUrl: "https://open.spotify.com/show/theyoungfoundershow",
    youtubeUrl: "https://youtube.com/@maherdhami",
    audioPreviewToneFrequency: 493,
    featured: false,
    takeaways: [
      "Youth is an asset: you have zero unlearning to do and low downside risk.",
      "Imposter syndrome is just proof that you are operating at the edge of your comfort zone.",
      "Let the quality of your code and user experience speak louder than your resume."
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2022",
    title: "Started Learning Programming",
    subtitle: "The First Line of Code",
    description: "In 2022, started learning programming fundamentals, computer science concepts, and web development. Discovered the magic of building software and turning ideas into real-world code.",
    badge: "Foundation",
    keyLesson: "Curiosity and consistency are the greatest compounding interest in software engineering."
  },
  {
    year: "2024",
    title: "Founded CODIEPAG",
    subtitle: "First Venture Into Entrepreneurship",
    description: "In 2024, founded CODIEPAG with ambitious goals to empower developers with curated coding resources and web tooling. Learned firsthand about building products, customer feedback, and wearing every hat.",
    badge: "Venture 1.0",
    keyLesson: "A product is not just code; it is distribution, branding, and customer empathy."
  },
  {
    year: "2026 till onwards",
    title: "Building DevLy",
    subtitle: "Flagship Developer Platform",
    description: "In 2026 till onwards, building DevLy — engineering a sleek, problem-focused developer platform with laser focus on user feedback, lightning-fast performance, and real-time developer workflows.",
    badge: "Flagship SaaS",
    keyLesson: "Solve a hair-on-fire problem with obsessive simplicity and rapid iteration."
  },
  {
    year: "The Horizon",
    title: "The Young Founder Show & Beyond",
    subtitle: "Scaling DevLy & Inspiring Builders",
    description: "Expanding DevLy into a global developer powerhouse while documenting the raw journey on The Young Founder Show. Inspiring students, creators, and young founders to build a brighter tomorrow.",
    badge: "Vision",
    keyLesson: "We are just getting started. A brighter tomorrow is built line by line."
  }
];

export const FOUNDER_WISDOM: FounderQuote[] = [
  {
    id: "quote-1",
    quote: "Don't wait until you've 'made it' to share your story. The raw lessons you learn while bleeding through a bug at 2 AM are ten times more valuable than polished memoirs.",
    context: "On building in public & authenticity",
    theme: "Authenticity"
  },
  {
    id: "quote-2",
    quote: "Code has become a commodity. Taste, speed of iteration, and listening obsessively to your users are the only true moats left for a young founder.",
    context: "On modern software defensibility",
    theme: "Strategy"
  },
  {
    id: "quote-3",
    quote: "You don't need a venture round or permission from a board to change your life. All you need is a laptop, high agency, and relentless consistency.",
    context: "On overcoming gatekeepers",
    theme: "Agency"
  },
  {
    id: "quote-4",
    quote: "When CODIEPAG hit a wall, it hurt. But without that failure, DevLy would never have been born. Treat every rejection as market feedback, not personal condemnation.",
    context: "On resilience and pivoting",
    theme: "Resilience"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Alex Chen",
    role: "Student Founder & CS Major",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    content: "The Young Founder Show is the only tech podcast where the host doesn't pretend to have everything figured out. Real metrics, actual code bugs, and raw honesty. Maher is building in public the way it should be done.",
    platform: "Spotify",
    rating: 5
  },
  {
    id: "test-2",
    author: "Priya Sharma",
    role: "Full-Stack Engineer & Creator",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    content: "Listening to Episode 24 on DevLy's launch inspired me to ship my side-project to Product Hunt. Maher's breakdown of time management between exams and coding was an eye-opener!",
    platform: "Apple Podcasts",
    rating: 5
  },
  {
    id: "test-3",
    author: "Marcus Vance",
    role: "Indie Hacker & Solopreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    content: "The audio quality, the pacing, and the depth of technical discussion are incredible. It feels like a late-night Discord jam with the smartest young builder in your network.",
    platform: "YouTube",
    rating: 5
  },
  {
    id: "test-4",
    author: "Elena Rostova",
    role: "Product Designer & Builder",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
    content: "The Young Founder Show has become part of my Sunday morning ritual. The insights on overcoming imposter syndrome gave me the confidence to pitch my first design clients.",
    platform: "Spotify",
    rating: 5
  }
];
