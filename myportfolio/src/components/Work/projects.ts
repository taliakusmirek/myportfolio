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
    slug: "simihaze-beauty-fall-campaign",
    title: "Simihaze Beauty Fall Campaign",
    summary:
      "During my fall internship at Simihaze Beauty, I was responsible for planning, executing, and optimizing social media campaigns for Instagram and TikTok to drive engagement, content consistency, and brand awareness.",
    tags: ["social", "campaigns", "beauty", "instagram", "tiktok"],
    cover: "/images/simihaze-cover.jpg",
    cardCover: "/images/simihaze-cover.jpg",
    gallery: [
      "/images/simihaze-grid-1.jpg",
      "/images/simihaze-grid-2.jpg",
    ],
    stats: {
      role: "Digital Strategy Intern",
      timeline: "Fall 2025",
      tools: ["Instagram", "TikTok", "analytics"],
    },
    caseStudy: {
      problem:
        "Simihaze Beauty needed consistent, on-brand content that could grow engagement ahead of upcoming product launches while maintaining a cohesive visual identity.",
      solution:
        "I designed and scheduled Instagram posts and reels aligned with campaign themes, created engaging captions and hashtags to increase reach and engagement, tracked and analyzed engagement metrics (likes, saves, shares), and assisted in strategy meetings to align content with the 2025 holiday 'RED COLLECTION' launch.",
      results:
        "Over the campaign period, engagement increased by 24%, the @simihazebeauty account gained 1,099 new followers organically, and one of the posts I worked on became a top-performing asset with over 120K interactions.",
      lessonsLearned:
        "This project sharpened my ability to connect day-to-day content execution with bigger launch objectives, interpret engagement metrics in context, and iterate quickly on creative decisions without losing brand voice.",
    },
  },
  {
    slug: "djerf-avenue-reputation-audit",
    title: "Djerf Avenue Reputation Audit",
    summary:
      "A crisis-communications and brand-reputation audit of Djerf Avenue after workplace allegations, evaluating the brand's public response, sentiment shifts, and the effectiveness of its remediation strategy, and proposing a 6–12 month recovery roadmap.",
    tags: ["brand", "crisis comms", "audit", "fashion"],
    cover: "/images/djerf-audit-cover.jpg",
    cardCover: "/images/djerf-audit-cover.jpg",
    stats: {
      role: "Brand Strategist (self‑directed case study)",
      timeline: "2024",
      tools: ["social listening", "press analysis"],
    },
    caseStudy: {
      problem:
        "In late 2024, Swedish influencer-founded brand Djerf Avenue faced public allegations of a toxic workplace and staff mistreatment, amplified by major outlets and social media. The controversy threatened trust with employees, customers, press, and retail partners, especially given the brand's strong founder-led identity.",
      solution:
        "I reconstructed the public timeline of events from the first Swedish investigation through the brand’s apology and subsequent press cycles, and then layered on a cross-channel sentiment analysis across Instagram, Twitter/X, Reddit, and major fashion and business publications. I combined social listening queries and press review to understand how quickly the story spread, how sentiment evolved over time, and how much of the discourse centered on the founder versus the company as a whole. From there, I mapped stakeholders – employees and former staff, customers and community, wholesale partners and editors, investors and founders – and assessed what each group needed to see to rebuild trust. I benchmarked Djerf Avenue’s response against other founder-led brand crises, looking for patterns in apology structure, governance changes, and transparency. Finally, I evaluated the strength of the brand’s communications against best practices: clarity of responsibility, specificity of promised actions, independence of oversight, and the presence (or absence) of measurable timelines and KPIs.",
      results:
        "The audit surfaced several key findings. In the immediate term, brand mentions spiked 3–10x with sentiment turning sharply negative, and criticism concentrated heavily on the founder due to the brand’s personality-driven positioning. The initial apology and statement acknowledged harm and pointed to external experts and leadership changes, but lacked independently verifiable timelines, public-facing KPIs, or mechanisms for staff to safely report issues and see change over time. Medium-term, coverage and commentary framed the story as a broader cautionary tale about founder worship in fashion and DTC, increasing reputational risk for wholesale partners, press, and collaborators. Financial reporting suggested mounting pressure on profitability and growth. Based on this, I built a 6–12 month recovery roadmap that paired internal changes (independent workplace audit, anonymous monthly pulse surveys, new senior operations/people leadership, mandatory manager training) with external moves (publishing an abstract of findings, employee ambassador storytelling with consent, a measured PR relaunch with clear milestones, and a charity-aligned capsule supporting workplace wellbeing). Together, these recommendations turn a one-off apology into a sustained governance and communications program.",
      lessonsLearned:
        "This project deepened my understanding of cross-channel reputation diagnostics, how to tie crisis communications to real operational change, and how founder-centric brands can rebuild credibility through measurable, transparent governance and communications.",
    },
  },
  {
    slug: "rhode-london-launch-audit",
    title: "Rhode London Launch & Pop‑Up Audit",
    summary:
      "A marketing and retail audit of Rhode's London pop-up and Sephora UK rollout, focused on how well the launch generated awareness, community engagement, and sustained conversion beyond launch week.",
    tags: ["beauty", "launch", "retail", "strategy"],
    cover: "/images/rhode-london-cover.jpg",
    gallery: [
      "/images/rhode-london-cover.jpg",
      "/images/rhode-pop-up-1.jpg",
      "/images/rhode-ooh-1.jpg",
    ],
    stats: {
      role: "Marketing Strategist (self‑directed case study)",
      timeline: "2024",
      tools: ["press review", "social listening", "OOH analysis"],
    },
    caseStudy: {
      problem:
        "Rhode's London launch and pop-up used OOH, events, influencer seeding, and press to create a big awareness moment, but from the outside it was harder to see how much of that launch buzz translated into sustained in-store conversion and long-term customer relationships.",
      solution:
        "I evaluated Rhode’s UK entry in several layers. First, I reviewed press coverage across beauty media, business wires, and trade outlets to understand how the brand positioned the London pop-up and Sephora rollout, what storylines were emphasized, and which product or brand pillars were spotlighted. In parallel, I ran social listening on Instagram and TikTok using Brandwatch-style queries around terms like 'rhode pop-up london' and branded hashtags to track how often the activation was mentioned, what type of content performed best, and how sentiment differed between founder-led posts, influencer coverage, and everyday customer reactions. Next, I catalogued influencer content from both top-tier creators and London-based micro-creators, noting the balance between aesthetic shots and practical education, the strength of CTAs, and the presence of any trackable links or codes. Finally, I analysed available case material from the OOH and events agency to understand placements, formats, and how the physical experience supported discovery and trial. Throughout, I benchmarked Rhode’s approach against another recent London beauty pop-up, focusing on how each brand linked awareness tactics to concrete conversion paths and retention programs.",
      results:
        "The audit confirmed that Rhode’s London launch successfully generated awareness: press placements were strong, founder and celebrity content drove massive reach, and OOH plus events created a citywide sense of presence. However, there were clear opportunities to turn that spike into a more durable UK customer base. Public signals suggested limited localization in content (relatively few everyday London stories and micro-creator narratives), a thin or invisible post-launch CRM funnel for visitors, and little evidence of in-store storytelling or trial mechanisms beyond standard merchandising. In response, I proposed a set of actionable plays: a three-month London micro-creator program focused on routine-based content and local context; in-store demo moments with QR codes leading to a skin quiz and email capture; repackaging event footage into a structured library of short verticals for paid social; and a measurement framework relying on UTM links, creator-specific promo codes, and cohort analysis of 30/60/90-day repeat purchase. Together, these recommendations show how Rhode could evolve from a one-time pop-up moment into an ongoing, measurable UK growth engine.",
      lessonsLearned:
        "This project strengthened my ability to connect brand-building, events, and OOH to measurable retail outcomes, design realistic measurement plans, and think through how a founder-led beauty brand can move from a splashy launch into localized, data-informed community and CRM.",
    },
  },
  {
    slug: "taliadoux-instagram-brand",
    title: "Instagram Personal Brand (@taliadoux)",
    summary:
      "I manage @taliadoux, an Instagram account focused on fashion education, style tips, and smart shopping that I grew from scratch to over 20K followers and 9M+ aggregated views in six months through strategic content and marketing analytics.",
    tags: ["content", "creator", "growth", "instagram"],
    cover: "/images/creator.png",
    singleCoverOnly: true,
    links: [{ label: "Instagram", href: "https://instagram.com/taliadoux" }],
    stats: {
      role: "Creator & Strategist",
      timeline: "2024–2025",
      tools: ["Instagram", "CapCut", "Notion", "analytics"],
    },
    caseStudy: {
      problem:
        "Fashion content on social media can be overwhelming, trend-driven, and disconnected from real people’s budgets and closets. I wanted to create a space where young women could get approachable fashion education, style systems, and smart shopping guidance instead of endless hauls.",
      solution:
        "I built @taliadoux around a consistent, high-volume content calendar: planning 2 reels per day plus carousels every other day, A/B testing captions, hashtags, and posting times, and iterating on hooks and formats to maximize saves, shares, and comments. I collaborated with brands on sponsored and affiliate campaigns (Cluely, Nooka, Plaud Note, Mitra) while keeping the account rooted in education and trust.",
      results:
        "Over six months, I grew the account to around 21K followers and 9M+ aggregated views, increased engagement rate from 3.4% to 7.2%, and averaged roughly 20K reach per reel, while building a recognizable niche around fashion education and smart shopping.",
      lessonsLearned:
        "Running @taliadoux taught me how to use experimentation and analytics to grow a creator brand without losing voice or credibility, and how to balance educational content with sponsorships in a way that feels honest to the audience.",
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
];
