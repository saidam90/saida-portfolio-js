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
      "Building the front-end and assisting with marketing initiatives",
    ],
    tech: ["React", "Typescript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Dexter on Radix",
    position: "Front-end Developer",
    time: "July 2024 - Present",
    location: "Remote",
    description: ["Building the front-end features. Open-source project."],
    tech: ["React", "Typescript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Shahdag Mountain Resort",
    position: "Digital Marketing Manager",
    time: "May 2023 - Present",
    location: "Remote/Baku, Azerbaijan",
    description: [
      "Coordinating new website development from planning to execution.",
      "Developed chatbot and AI-powered messaging, reducing customer support workload by 30% and growing the user database by 15%.",
      "Launched PPC campaigns using segmentation of audiences.",
      "Resolved website issues and optimized SEO, resulting in a 35% traffic increase.",
      "Built high-converting landing pages to boost conversions.",
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
      "Developed and executed a quarterly marketing B2B strategy plan, that ensured a consistent flow of high-quality blog posts, newsletters and whitepapers leading to increased brand visibility and audience engagement.",
      "Created a series of whitepapers for the brand, blog posts improving SEO performance and newsletters.",
      "Implemented segmentation for newsletter subscribers and customer journey",
      "Introduced visually appealing templates for social media platforms and incorporated AI-generated images.",
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
    title: "Shahdag Mountain Resort",
    position: "Head of Marketing",
    time: "Oct 2021 - Sep 2022",
    location: "Baku/Azerbaijan",
    description: [
      "Maximized direct bookings by 294% compared to the previous year by integrating the booking engine into social network accounts, and offering seasonal promotions - as a result, lowered the commissions to third-party OTAs.",
      "Led a successful marketing campaign for a new resort activity and ensured its timely launch; created a viral video that led to a sales increase of the new product over one quarter.",
      "Contributed to a 12% increase in sales of winter activities through an offline campaign with UTM tracking.",
      "Increased the organic reach of the social media channels by creating unique content without expanding the monthly budget.",
    ],
    tech: [
      "Google Ads",
      "Facebook Ads Manager",
      "Meta Business Suite",
      "Mailchimp",
      "Canva",
      "Adobe Photoshop",
    ],
  },
  {
    title: "PMD Hospitality",
    position: "Group Marketing Executive",
    time: "Jun 2021 - Sep 2021",
    location: "Baku/Azerbaijan",
    description: [
      "Managed digital marketing activities for Chenot Palace Gabala, Chinar Hotel & Spa, Galaalti Hotel & Spa, Gashalti Health Hotel Naftalan, Garabagh Resort & Spa, Shamakhi Palace Sharadil and Lankaran Springs Wellness Resort.",
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
  {
    title: "Chenot Palace",
    position: "Digital Marketing & Brand Executive",
    time: "Feb 2016 - Sep 2021",
    location: "Baku/Azerbaijan",
    description: [
      "Development and delivery of the annual marketing plan and digital marketing strategy.Content management of the website through CMS in 3 languages.",
      "Managing creative campaigns (SM; Display; SEM: CPC - €0.20) and optimising website traffic with positive post-click metrics (bounce rate < 40%, time spend > 1 min).",
      "Conducting email campaigns and promotions for events - as a result, achieved sales uplift up to 45%.",
      "Optimised social media content - redesigned branded templates, introduced grid layout and eye-catching visuals.",
      "Implemented audience segmentation strategy in email campaigns which helped to improve open rate by 10%.",
      "Owning the external agencies' relationships - PR, SEO, creative; managing budgets, allocating and optimising spend across tactics to maximize content effectiveness.",
      "Reduced annual marketing spend of €1500 by introducing a new print supplier and changing the email marketing platform.",
      "Arranged over 100 press and influencer trips, and negotiated influencer contracts for all collaborations.",
      "Managed a cross-functional team working toward the development of 52 marketing collaterals.",
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
