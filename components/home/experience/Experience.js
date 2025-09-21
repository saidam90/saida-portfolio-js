import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Delirous Eyewear",
    position: "Web Developer & Growth",
    time: "May 2025 - Present",
    location: "Remote",
    description: [
      "- Built and launched the Delirious Lifestyle blog in Next.js, including tagging and cross-linking to strengthen content discoverability,",
      "- Queried Shopify's GraphQL API to fetch custom metafields (meta titles, descriptions) and render them dynamically across product and blog pages.",
      "- Implemented JSON-LD structured data and optimized meta markup to boost SEO crawlability and search visibility.",
      "- Supporting early-stage Web3 planning, including tokenization and investor readiness strategy.",
    ],
    tech: [
      "Next.js",
      "Shopify",
      "GraphQL API",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "JSON-LD",
      "SEO",
    ],
  },
  {
    title: "Rakoon.fun",
    position: "Co-founder, Front-end Developer",
    time: "Sep 2024 - Present",
    location: "Remote",
    description: [
      "- Built the Launch Token page and implemented a currency converter with XRD - USD conversion logic using Redux for state management.",
      "- Designed and modified UI components across all pages, ensuring consistent branding and user experience.",
      "- Developed new features (in review): Sign-up flow with Telegram login, connected to a rewards dashboard showing collected points and referral codes. Sentiment voting system on token pages to capture community feedback.",
      "- Assisting in marketing initiatives and community building, engaging crypto users and growing awareness.",
      "- Contributed to overall product growth, securing The MVP Booster and The Launch Booster grants, and placing 5th at the ECB Barcelona Hackathon.",
    ],
    tech: [
      "React",
      "Typescript",
      "Redux",
      "Tailwind CSS",
      "Product Marketing",
      "Telegram",
      "Figma",
    ],
  },
  {
    title: "Dexter on Radix",
    position: "Front-end Developer",
    time: "July 2024 - December 2024",
    location: "Remote",
    description: [
      "- Building front-end features using React, TypeScript, Redux, and Tailwind CSS.",
      "- Authored multiple PRs merged into the main branch, including features such as Buy/sell panel slider, Intuitive pair search, Toggle to show all trades.",
    ],
    tech: ["React", "Typescript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Shahdag Mountain Resort",
    position: "Digital Marketing Manager",
    time: "Oct 2021 - Present",
    location: "Remote/Baku, Azerbaijan",
    description: [
      "- Maximized direct bookings by 294% YoY by integrating booking engine into social platforms and launching data-driven seasonal campaigns, significantly reducing OTA commission costs.",
      "- Developed AI-powered chatbot flow reducing customer support workload by 30% while growing user database.",
      "- Led a full-cycle campaign for a new resort activity, including concept, content, and a viral promo video, boosting product sales in one quarter.",
      "- Increased winter activity sales by 12% (~€8K) through integrated offline campaigns, real-time event activations, and livestream promotions with UTM tracking that converted audiences into bookings.",
      "- Implemented custom event tracking in Google Tag Manager to monitor conversions on key actions (booking, subscription, etc.), providing more accurate funnel data in GA4.",
      "- Coordinating the go-to-market for the revamped website with cross-functional teams, ensuring product readiness through feature testing, bug identification, and UX enhancements.",
      "- Conducted Hotjar heatmaps and session recordings to analyze user behavior, generating insights that informed the design of the resort’s new website.",
      "- Resolving issues of the existing website, optimizing SEO, and implementing usability improvements to boost engagement.",
      "- Managing communication with the agency running paid media, aligning on the content strategy and campaign KPIs.",
      "- Owning the CMS, managing content in 3 languages.",
    ],
    tech: [
      "CRO",
      "SEO",
      "CMS",
      "Strapi",
      "ManyChat",
      "MailerLite",
      "Semrush",
      "Hotjar",
      "Google Tag Manager",
      "Google Analytics",
      "Looker Studio",
      "HTML/CSS, JavaScript",
      "Meta Business Suite",
      "Google Ads",
    ],
  },
  {
    title: "VABISS",
    position: "Front-end Developer Intern",
    time: "Feb 2024 - Mar 2024",
    location: "Remote",
    description: ["Participation in the Farm ERP project."],
    tech: [
      "React",
      "Vite.js",
      "Redux",
      "Formik & Yup",
      "Toastify",
      "Material UI",
      "Tailwind CSS",
      "React Leaflet",
      "Turf.JS",
      "Fetch API",
    ],
  },
  {
    title: "ROLZO",
    position: "Marketing Consultant",
    time: "Sep 2023 - Dec 2023",
    location: "Remote/London, UK",
    description: [
      "- Developed B2B strategy plan with a consistent flow of high-quality content leading to increased brand visibility and audience engagement.",
      "- Designed eye-catching visuals for social media, enhancing engagement.",
      "- Set up onboarding email automation with sequenced newsletters every 2 - 3 days to boost lead conversion.",
      "- Implemented a cost-efficient CRM integration using Pipedrive, Mailchimp, and Outfunnel - leveraging tags to streamline audience segmentation and eliminate duplicate contact charges.",
      "- Created a series of whitepapers for the brand, blog posts improving SEO performance and newsletters.",
    ],
    tech: [
      "B2B",
      "Wordpress",
      "Pipedrive",
      "Mailchimp",
      "Outfunnel",
      "Canva",
      "Notion",
    ],
  },
  {
    title: "Chenot Palace",
    position:
      "Marketing Coordinator (Pre-opening) -> Digital Marketing & Brand Executive",
    time: "Feb 2016 - Sep 2021",
    location: "Baku/Azerbaijan",
    description: [
      "- Led GTM strategy for the pre-opening of a luxury wellness hotel, building brand identity from scratch and ensuring consistency across all digital touchpoints.",
      "- Directed cross-channel presence (social media, website, meta search) and produced 50+ launch assets in collaboration with design, marketing, and operations teams.",
      "- Developed and delivered annual marketing and digital strategies, managing budgets to optimise spend across campaigns.",
      "- Oversaw multilingual website CMS and executed creative campaigns (Social Media, Display, SEM: CPC €0.20) with improved post-click metrics (bounce rate <40%, time >1 min).",
      "- Launched segmented email campaigns that lifted open rates by 15% and increased event sales by 45%.",
      "- Enhanced social media branding with new templates, grid layout, and visuals.",
      "- Reduced annual spend by €1,500 through vendor renegotiations and switching platforms.",
      "- Coordinated 100+ press and influencer trips, negotiating collaboration contracts and securing media coverage.",
    ],
    tech: [
      "B2C",
      "Google Ads",
      "Meta Business Suite",
      "Mailchimp",
      "Canva",
      "Adobe Photoshop",
      "cPanel",
      "Wordpress",
    ],
  },
];
