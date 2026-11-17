export const contact = {
  email: "sales@kemetmediagroup.com",
  phone: "+1 (559) 712-8024",
  phoneHref: "tel:+15597128024",
  address: "777 Minnewawa Ave, Suite 8",
  city: "Clovis, CA 93612, United States",
  mapUrl: "https://maps.app.goo.gl/4r6xZog2PqCbRTdJA",
  offices: ["United States", "UAE", "Egypt"],
};

export const socials = [
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/kemetmarketingsolutions" },
  { label: "Facebook", short: "FB", href: "https://www.facebook.com/kemetdigitalandsocial" },
  { label: "TikTok", short: "TT", href: "https://www.tiktok.com/@kemetmarketingsolutions" },
  { label: "YouTube", short: "YT", href: "https://youtube.com/@kemetmarketing" },
  { label: "X", short: "X", href: "https://x.com/kemetmediagroup" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  tags: string[];
  bullets: string[];
  processTitle: string;
  processLead: string;
  steps: { title: string; text: string }[];
  pillars: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "marketing-planning-strategy",
    index: "01",
    title: "Marketing Planning & Strategy",
    short: "Every successful campaign starts with a strong plan.",
    image: "/img/svc-strategy.png",
    intro:
      "Our Marketing Planning and Strategy service helps businesses understand their market, define their ideal audience, and craft data-driven strategies that lead to measurable growth.",
    tags: ["Strategy", "Brand Identity", "Communication", "Research", "Consultation"],
    bullets: [
      "Market, competitor & audience analysis",
      "Customer journey & buying behavior insights",
      "Brand positioning & messaging strategy",
      "Campaign roadmap, budget & channel planning",
    ],
    processTitle: "Our comprehensive strategy process",
    processLead:
      "Whether you're a startup or an industry star, we're here to promote your brand through creative research and real human-centred design.",
    steps: [
      {
        title: "Market & Competitor Analysis",
        text: "Deep market intelligence and competitive benchmarking to uncover your market position and identify opportunities.",
      },
      {
        title: "Audience Segmentation",
        text: "Using advanced AI tools, we segment audiences by demographics, behavior, and intent — reaching the right people at the right time.",
      },
      {
        title: "Buying Behavior Insights",
        text: "We study purchase journeys, triggers, and preferences to build campaigns that influence decisions and drive conversions.",
      },
    ],
    pillars: [
      {
        title: "Market Intelligence",
        text: "Mapping competitor positioning, pricing, messaging, and channel activity to find where demand exists — and where it's being missed.",
      },
      {
        title: "AI-Driven Segmentation",
        text: "Segments built on behavior, intent, and conversion signals, not assumptions — so you target high-probability buyers.",
      },
      {
        title: "Data-Driven Decisions",
        text: "Every recommendation is backed by performance data, letting you allocate budget and prioritize channels with confidence.",
      },
    ],
  },
  {
    slug: "media-buying-performance-marketing",
    index: "02",
    title: "Media Buying & Performance Marketing",
    short: "Your brand, where attention, intent and performance meet.",
    image: "/img/svc-media.png",
    intro:
      "We use AI and automation to evaluate channel performance in real time, select the right placements, and optimize spend for stronger reach, better efficiency, and measurable ROI across digital and traditional media.",
    tags: ["AI Ad Optimization", "Programmatic Buying", "Performance Campaigns", "Multi-Channel", "Budget Efficiency"],
    bullets: [
      "Traditional media buying: TV, radio, outdoor, print",
      "Digital advertising: Meta, Google, TikTok, LinkedIn, YouTube",
      "Programmatic advertising: display, CTV/OTT, native ads",
      "Performance campaigns: leads, sales, CPA & ROAS optimization",
      "Media budget optimization & spend control",
    ],
    processTitle: "Precision media execution",
    processLead: "We place your brand where attention, intent, and performance meet.",
    steps: [
      {
        title: "AI Ad Optimization",
        text: "AI-driven analysis across major ad platforms to improve delivery, reduce wasted spend, and maximize return on every placement.",
      },
      {
        title: "Programmatic Advertising",
        text: "Automated media buying that reaches the right audience at the right time with sharper targeting precision.",
      },
      {
        title: "Multi-Channel Placement",
        text: "Coordinated placements across digital and traditional media for consistency, visibility, and clearer outcomes.",
      },
    ],
    pillars: [
      {
        title: "Channel Precision",
        text: "Channels matched to your audience, objectives, and budget — placed where they generate the strongest return.",
      },
      {
        title: "Always-On Optimization",
        text: "Campaign delivery monitored and improved across Google, Meta, TikTok, Snapchat and more.",
      },
      {
        title: "Programmatic Efficiency",
        text: "Automated buying that cuts waste and keeps spend under control.",
      },
    ],
  },
  {
    slug: "branding-creative-direction",
    index: "03",
    title: "Branding & Creative Direction",
    short: "Consistent, sharp brand communication at every touchpoint.",
    image: "/img/svc-branding.png",
    intro:
      "We combine creative concepts, copywriting, design assets, content production, and web experience to help your brand look sharper, communicate clearly, and stay consistent across every touchpoint.",
    tags: ["Creative Direction", "Copywriting", "Social & Print", "Video Production", "Web & UI/UX"],
    bullets: [
      "Creative direction, campaign concepts & copywriting",
      "Ad creatives, social media assets & print designs",
      "Content marketing, reels, stories & video production",
      "Website design, development & landing pages",
      "UI/UX, mobile optimization & website maintenance",
    ],
    processTitle: "Creative execution",
    processLead: "We turn brand ideas into visual assets, content, and digital experiences.",
    steps: [
      {
        title: "Campaign Concepts & Copywriting",
        text: "Creative campaign ideas, headlines, messaging, and copy direction that help your brand communicate with clarity.",
      },
      {
        title: "Creative Assets & Content",
        text: "Ad creatives, social visuals, print, reels, stories and branded video built for each platform and audience.",
      },
      {
        title: "Web & Digital Experience",
        text: "Websites, landing pages, UI/UX and mobile experiences designed to support your marketing goals.",
      },
    ],
    pillars: [
      {
        title: "Campaign Direction",
        text: "Concepts, visual themes and creative routes that give your marketing a stronger idea and clearer message.",
      },
      {
        title: "Ad & Social Assets",
        text: "Digital and print assets for ads, social and promotions — always visually consistent.",
      },
      {
        title: "Content & Video",
        text: "Reels, stories and branded video that keep your audience engaged.",
      },
    ],
  },
  {
    slug: "seo-growth-optimization",
    index: "04",
    title: "SEO & Growth Optimization",
    short: "Get discovered, understood, cited and selected.",
    image: "/img/svc-seo.png",
    intro:
      "Our SEO, AEO & GEO service improves visibility across search engines, answer engines, and AI-powered platforms — combining technical SEO, keyword strategy, structured content, entity optimization, analytics and conversion improvements.",
    tags: ["Technical SEO", "Keyword Mapping", "AEO", "GEO", "Content SEO", "Analytics"],
    bullets: [
      "SEO strategy, keyword research & content SEO",
      "On-page, technical, local SEO & link-building",
      "Automated dashboards & performance reporting",
      "Retargeting & re-engagement campaigns",
      "Conversion tracking, funnel analysis & growth recommendations",
    ],
    processTitle: "Search & AI visibility",
    processLead: "We improve how your website ranks, answers, and appears across search and AI platforms.",
    steps: [
      {
        title: "Technical SEO",
        text: "Indexing, crawlability, page speed, metadata, redirects, mobile performance and Core Web Vitals.",
      },
      {
        title: "AEO & Content Mapping",
        text: "Pages, FAQs, headings and schema structured around the real questions your audience asks.",
      },
      {
        title: "GEO & AI Visibility",
        text: "Stronger entities, authority signals and source credibility so AI answers represent your business accurately.",
      },
    ],
    pillars: [
      {
        title: "Keyword & Content Mapping",
        text: "High-intent search opportunities mapped to the right pages and content.",
      },
      {
        title: "Analytics & Tracking",
        text: "Automated dashboards and conversion tracking so every gain is measurable.",
      },
      {
        title: "Growth Recommendations",
        text: "Funnel analysis that turns traffic into qualified leads and sales.",
      },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  client: string;
  image: string;
  tags: string[];
  year: string;
  platforms: string;
  service: string;
  headline: string;
  summary: string;
  body: string;
  deliverables: string[];
  highlight: { value: string; label: string };
  stats?: { value: string; label: string; note: string }[];
  goals?: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "truecare",
    name: "TrueCare",
    client: "True Care Clinic",
    image: "/img/truecare.png",
    tags: ["Website", "Performance", "SEO"],
    year: "2025–2026",
    platforms: "Meta Ads, Google Ads, WordPress",
    service: "Website, Performance Marketing, SEO",
    headline: "A digital growth funnel for healthcare",
    summary: "A performance ecosystem turning digital traffic into patient calls and messages.",
    body:
      "True Care Clinic needed to strengthen its online presence, attract high-intent patients, and turn digital traffic into inquiries, messages, and calls. We built a performance-driven ecosystem combining a modern website, targeted Meta and Google campaigns, and SEO to drive measurable growth.",
    deliverables: [
      "Website & Digital Presence",
      "Meta Advertising Campaigns",
      "Google Ads Search Campaigns",
      "SEO & Organic Visibility",
      "Reporting & Performance Analysis",
    ],
    highlight: { value: "570", label: "Instagram profile visits" },
    stats: [
      { value: "570", label: "Instagram profile visits", note: "$1.02 cost per result" },
      { value: "560", label: "Facebook follows", note: "$1.25 cost per result" },
      { value: "77", label: "Google Ads clicks", note: "5,970 impressions" },
      { value: "20", label: "Call-button conversions", note: "$117 per conversion" },
    ],
  },
  {
    slug: "sf-shoply",
    name: "SF Shoply",
    client: "SF Shoply",
    image: "/img/sfshoply.png",
    tags: ["Website", "E-commerce"],
    year: "2025–2026",
    platforms: "WordPress",
    service: "Website Design & Development",
    headline: "A digital storefront for a food brand",
    summary: "A clean, responsive storefront with product-led visuals and a clear path to order.",
    body:
      "SF Shoply needed a clean, responsive website that presents the brand clearly, showcases its food offering, and creates a smoother browsing experience. We translated the brand identity into a structured digital storefront with clear navigation, product-led visuals, mobile-friendly layouts, and action-focused sections.",
    deliverables: [
      "Website Structure & Layout",
      "Homepage Design",
      "Brand Implementation",
      "Responsive Experience",
      "Product Presentation",
      "User Journey & Navigation",
    ],
    highlight: { value: "100%", label: "Responsive storefront" },
    goals: [
      { title: "Brand Presence", text: "A stronger online identity for the food brand." },
      { title: "Product Discovery", text: "An offering that's easier to browse, understand and explore." },
      { title: "Mobile Experience", text: "Smooth across desktop, tablet and mobile." },
      { title: "Clear User Journey", text: "Visitors guided toward order, inquiry or contact." },
    ],
  },
  {
    slug: "german-kitchen-studio",
    name: "German Kitchen Studio",
    client: "German Kitchen Studio (GKS)",
    image: "/img/gks.png",
    tags: ["Website", "Social Media"],
    year: "2024–2025",
    platforms: "WordPress, Meta",
    service: "Website Design & Development, Social Media Marketing",
    headline: "A premium digital showroom for interior living",
    summary: "A refined showroom for kitchens, bathrooms and living — built around booking appointments.",
    body:
      "German Kitchen Studio needed a refined website presenting premium interior solutions with the clarity and elegance expected from the brand. It showcases kitchens, bathrooms, living solutions, fittings and appliances through a polished browsing experience with clear navigation and appointment-focused journeys.",
    deliverables: [
      "Premium Website Experience",
      "Product Catalog Structure",
      "Kitchen & Interior Showcase",
      "Responsive Experience",
      "Appointment Journey",
      "Brand-Led Visual Direction",
    ],
    highlight: { value: "6", label: "Product categories organized" },
    goals: [
      { title: "Premium Presence", text: "A refined interior and kitchen design brand online." },
      { title: "Product Discovery", text: "Kitchens, bathrooms, living, fittings and appliances in clear paths." },
      { title: "Appointment Journey", text: "Visitors guided to quotes, free appointments and consultations." },
      { title: "Responsive Showroom", text: "A polished experience on every screen." },
    ],
  },
  {
    slug: "middle-east-fiber-cables",
    name: "Middle East Fiber Cables",
    client: "Middle East Fiber Cable Manufacturing",
    image: "/img/mefc.webp",
    tags: ["Personal Branding", "Content"],
    year: "2025–2026",
    platforms: "Meta, LinkedIn, Mailchimp",
    service: "Executive Personal Branding, Newsletter & Social Content",
    headline: "Industry authority through strategic content",
    summary: "Executive branding, editorial positioning and a monthly newsletter for an industrial leader.",
    body:
      "MEFC needed a stronger, more consistent digital voice — one that communicates its expertise, strengthens stakeholder relationships, and positions its leadership in the regional industrial landscape. We built an integrated content strategy combining executive personal branding, editorial positioning, monthly newsletters and ongoing social content.",
    deliverables: [
      "CEO LinkedIn Personal Branding",
      "Monthly Newsletter Strategy & Copy",
      "Executive Media Positioning",
      "Corporate Social Media Content",
    ],
    highlight: { value: "12", label: "Newsletters a year" },
    goals: [
      { title: "Thought Leadership", text: "The CEO positioned as a voice of the cable manufacturing sector on LinkedIn." },
      { title: "Publication Feature", text: "The CEO's story placed in a major financial and managerial publication." },
      { title: "Monthly Newsletter", text: "Stakeholders kept informed on news, projects and achievements." },
      { title: "Social Content", text: "Ongoing content communicating products, milestones and insights." },
    ],
  },
];

export const gallery = [
  { name: "Stavros Catering", type: "Website", image: "/img/stavros.png" },
  { name: "Pacific Dental Clinic", type: "Website", image: "/img/pacific.webp" },
  { name: "Urban Design Engineering", type: "Website", image: "/img/urban.png" },
  { name: "Hero Express Way", type: "Website", image: "/img/heroexp.png" },
  { name: "Luxury Limo OC", type: "Website", image: "/img/limo.png" },
  { name: "Global Nexus Management", type: "Branding", image: "/img/gnm.jpeg" },
  { name: "Nami — Sushi Bar", type: "Branding", image: "/img/nami.webp" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "Market, competitor and audience analysis to understand exactly where your growth will come from.",
    image: "/img/svc-strategy.png",
  },
  {
    step: "02",
    title: "Plan",
    text: "Positioning, messaging, budget and a channel roadmap — every decision backed by data.",
    image: "/img/svc-seo.png",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    text: "Creative and media go live, then AI optimizes delivery in real time with transparent reporting.",
    image: "/img/svc-media.png",
  },
];

export const reasons = [
  { title: "AI-First Approach", text: "Machine learning optimizes every campaign in real time." },
  { title: "Global Standards", text: "U.S. innovation meets UAE market understanding." },
  { title: "Transparent Reporting", text: "Every decision backed by data you can see." },
  { title: "360° Coverage", text: "From strategy to execution — digital, traditional and hybrid." },
  { title: "Faster Turnaround", text: "Automated processes mean quicker delivery and sharper results." },
];

export const values = [
  { title: "Innovation", text: "Constantly evolving with AI and market trends." },
  { title: "Partnership", text: "Building long-term relationships with our clients." },
  { title: "Accountability", text: "Every campaign measured. Every result transparent." },
];

export const team = [
  { name: "George Wahba", role: "Founder & CEO", image: "/img/team/george.webp" },
  { name: "Andrew Salib", role: "Technology Lead", image: "/img/team/andrew-salib.webp" },
  { name: "Beshoy Sabry", role: "Data Analyst Lead", image: "/img/team/beshoy-sabry.webp" },
  { name: "Andrew Nashaat", role: "Marketing Strategist", image: "/img/team/andrew-nashaat.webp" },
  { name: "Abanoub Mounir", role: "Art & Creative Lead", image: "/img/team/abanoub-mounir.webp" },
];

export const stats = [
  { value: 98, suffix: "%", label: "Clients satisfied and returning" },
  { value: 120, suffix: "+", label: "Projects delivered in 4 countries" },
  { value: 2020, suffix: "", label: "Founded in Clovis, California" },
];
