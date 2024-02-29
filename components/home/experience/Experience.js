import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "VABISS",
    position: "Front-end Developer Intern",
    time: "Feb 2024 - Present",
    location: "Remote",
    description: "Participation in the Farm ERP project.",
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
    title: "Shahdag Mountain Resort",
    position: "Digital Marketer",
    time: "05.2023 - Present",
    location: "Remote/Baku, Azerbaijan",
    description:
      "Building landing pages. Launching PPC campaigns on Google Ads. Handling technical issues on the website, optimising SEO strategies, and collaborating with the outsourced web development team.",
    tech: [
      "Facebook Ads Manager",
      "Google Ads",
      "HTML, CSS, JavaScript",
      "SEO",
      "CMS",
    ],
  },
  {
    title: "ROLZO",
    position: "Marketing Consultant",
    time: "09.2023 - 12.2023",
    location: "Remote/London, UK",
    description:
      "Developed and executed a quarterly marketing B2B strategy plan, that ensured a consistent flow of high-quality blog posts, newsletters and whitepapers leading to increased brand visibility and audience engagement. Developed and implemented a social media calendar resulting in a 50% increase in engagement on LinkedIn and a 25% rise in click-through rates. Created a series of whitepapers for the brand, blog posts improving SEO performance and newsletters. Implemented segmentation for newsletter subscribers and customer journey. Introduced visually appealing templates for social media platforms and incorporated AI-generated images.",
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
    time: "10.2021 - 09.2022",
    location: "Baku/Azerbaijan",
    description:
      "Maximized direct bookings by 294% compared to the previous year by integrating the booking engine into social network accounts, and offering seasonal promotions - as a result, lowered the commissions to third-party OTAs. Led a successful marketing campaign for a new resort activity and ensured its timely launch; created a viral video that led to a sales increase of the new product over one quarter. Contributed to a 12% increase in sales of winter activities through an offline campaign with UTM tracking. Increased the organic reach of the social media channels by creating unique content without expanding the monthly budget.",
    tech: [
      "Google Ads",
      "Facebook Ads Manager",
      "Meta Business Suite",
      "Mailchimp",
      "Canva",
      "Adobe Photoshop",
    ],
  },
];
