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
    title: "Rakoon.fun",
    position: "Co-founder, Front-end Developer",
    time: "Sep 2024 - Present",
    location: "Remote",
    description: [
      "Building the frontend using React, TypeScript, Redux, and Tailwind CSS by translating designs from Figma.",
      "Assisting in marketing initiatives and community building, engaging crypto users and growing awareness.",
      "Secured The MVP Booster and The Launch Booster grants as a team and placed 5th at the ECB Barcelona Hackathon, validating the startup's potential.",
    ],
    tech: ["React", "Typescript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Dexter on Radix",
    position: "Front-end Developer",
    time: "July 2024 - December 2024",
    location: "Remote",
    description: ["Building the front-end features. Open-source project."],
    tech: ["React", "Typescript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Shahdag Mountain Resort",
    position: "Digital Marketing Manager",
    time: "Oct 2021 - Present",
    location: "Remote/Baku, Azerbaijan",
    description: [
      "Maximized direct bookings by 294% YoY by integrating booking engine into social platforms and launching data-driven seasonal campaigns, significantly reducing OTA commission costs.",
      "Developed AI-powered chatbot flow reducing customer support workload by 30% while growing user database.",
      "Led a full-cycle campaign for a new resort activity, including concept, content, and a viral promo video, boosting product sales in one quarter.",
      "Delivered 12% increase in winter activity sales through integrated offline campaigns with UTM tracking and real-time event coordination/livestreaming.",
      "Coordinating the go-to-market for the revamped website with cross-functional teams, ensuring product readiness through feature testing, bug identification, and UX enhancements.",
      "Resolving issues of the existing website, optimizing SEO, and implementing usability improvements to boost engagement.",
      "Managing communication with the agency running paid media, aligning on the content strategy and campaign KPIs.",
      "Owning the CMS, managing content in 3 languages.",
    ],
    tech: [
      "Facebook Ads Manager",
      "Google Ads",
      "HTML, CSS, JavaScript",
      "SEO",
      "CMS",
      "Strapi",
      "ManyChat",
      "MailerLite",
      "Semrush",
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
      "Developed B2B strategy plan with a consistent flow of high-quality content leading to increased brand visibility and audience engagement.",
      "Designed eye-catching visuals for social media, enhancing engagement.",
      "Set up onboarding email automation with sequenced newsletters every 2 - 3 days to boost lead conversion.",
      "Implemented a cost-efficient CRM integration using Pipedrive, Mailchimp, and Outfunnel - leveraging tags to streamline audience segmentation and eliminate duplicate contact charges.",
      "Created a series of whitepapers for the brand, blog posts improving SEO performance and newsletters.",
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
      "Led GTM strategy for the pre-opening of a luxury wellness hotel, building brand identity from scratch and ensuring consistency across all digital touchpoints.",
      "Directed cross-channel presence (social media, website, meta search) and produced 50+ launch assets in collaboration with design, marketing, and operations teams.",
      "Developed and delivered annual marketing and digital strategies, managing budgets to optimise spend across campaigns.",
      "Oversaw multilingual website CMS and executed creative campaigns (Social Media, Display, SEM: CPC €0.20) with improved post-click metrics (bounce rate <40%, time >1 min).",
      "Launched segmented email campaigns that lifted open rates by 15% and increased event sales by 45%.",
      "Enhanced social media branding with new templates, grid layout, and visuals.",
      "Reduced annual spend by €1,500 through vendor renegotiations and switching platforms.",
      "Coordinated 100+ press and influencer trips, negotiating collaboration contracts and securing media coverage.",
    ],
    tech: [
      "B2C",
      "Google Ads",
      "Facebook Ads Manager",
      "Meta Business Suite",
      "Mailchimp",
      "Canva",
      "Adobe Photoshop",
    ],
  },
];
