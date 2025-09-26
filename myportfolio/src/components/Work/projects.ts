export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string; // optional image path or remote URL
  gallery?: string[]; // optional additional images
  cardCover?: string; // optional card-specific cover image
  cardGallery?: string[]; // optional card-specific gallery for landing cards
  links?: { label: string; href: string }[];
  singleCoverOnly?: boolean; // if true, cards/detail should show a single cover tile
  stats?: {
    role?: string;
    timeline?: string;
    tools?: string[];
  };
  caseStudy: {
    problem: string;
    solution: string;
    results: string;
    lessonsLearned: string;
  };
};

export const projects: Project[] = [
  {
    slug: "mcp2",
    title: "mcp^2",
    summary: "AI scheduling calendar built at HackMIT ’25. Won 2nd place among 200+ teams.",
    tags: ["ui/ux", "product", "ai", "hackmit"],
    cover: "/images/mcpfigma.png",
    gallery: ["/images/mcpfigma.png", "/images/mcp.png"],
    cardCover: "/images/mcpcover1.png",
    cardGallery: ["/images/mcpcover1.png", "/images/mcpcover2.png"],
    links: [
      { label: "Waitlist", href: "https://lnkd.in/eZ2GKJ7g" },
      { label: "Reel", href: "https://lnkd.in/e-u8gJFH" },
    ],
    stats: {
      role: "Product Design, PM",
      timeline: "HackMIT ’25 (48h)",
      tools: ["Figma", "Next.js", "Vercel", "OpenAI"],
    },
    caseStudy: {
      problem: "Manual scheduling is time-consuming and prone to errors.",
      solution: "Developed an AI-powered calendar that scans emails, schedules smartly, and syncs with Notion.",
      results: "2nd place at HackMIT '25, with 200+ teams participating.",
      lessonsLearned: "Importance of user research and testing in developing effective AI-powered solutions.",
    },
  },
  {
    slug: "cira",
    title: "CIRA",
    summary: "Fashion-tech MVP built at MIT. 300+ beta users; v2 adds skincare/makeup scanning and a Chrome extension.",
    tags: ["next.js", "ios roadmap", "chrome ext", "growth"],
    cover: "/images/cira1.png",
    gallery: ["/images/cira1.png", "/images/cira2.png", "/images/cira3.png"],
    links: [
      { label: "Website", href: "https://www.cirastyle.com/" },
    ],
    stats: {
      role: "Product & Strategy",
      timeline: "2024–2025",
      tools: ["Next.js", "Figma", "Chrome Ext"],
    },
    caseStudy: {
      problem: "Limited fashion-tech solutions for skincare and makeup.",
      solution: "Developed a fashion-tech MVP with skincare/makeup scanning and Chrome extension.",
      results: "300+ beta users, with v2 featuring research-driven features and growth via LinkedIn/IG/TikTok.",
      lessonsLearned: "Importance of solo-building and iterating based on user feedback.",
    },
  },
  {
    slug: "creator",
    title: "Creator",
    summary: "Instagram community for student careers. Grew to 15K in 4 months with 4M+ views.",
    tags: ["content", "growth", "community"],
    cover: "/images/creator.png",
    gallery: [],
    singleCoverOnly: true,
    links: [
      { label: "Instagram", href: "https://instagram.com/taliadoux" },
    ],
    stats: {
      role: "Creator, Growth",
      timeline: "2025",
      tools: ["Instagram", "CapCut", "Notion"],
    },
    caseStudy: {
      problem: "Limited resources for students to learn about career development.",
      solution: "Built a student career community with engaging content and collaborations.",
      results: "14K+ followers, 4M+ total views, and dozens of collaborations with other creators.",
      lessonsLearned: "Importance of consistency and engagement in building a loyal community.",
    },
  },
];
