import { SectionHeader } from "@/components/utils/SectionHeader";
import { EducationItem } from "./EducationItem";

export const Education = () => {
  return (
    <section className="section-wrapper" id="education">
      <SectionHeader title="Education" dir="l" />
      {education.map((item) => (
        <EducationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const education = [
  {
    title: "University of Helsinki",
    position: "Full Stack Open 2024 Online Program",
    time: "Jan 2024 - May 2024",
    location: "Remote",
    description: [""],
  },
  {
    title: "Le Wagon London",
    position: "Computer Programming",
    time: "Oct 2022 - Dec 2022",
    location: "London, UK",
    description: [
      "Attended Le Wagon London in person (Batch #1052). Full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,SQL, git, GitHub, Heroku and Ruby on Rails.",
    ],
  },
  {
    title: "University of Glasgow",
    position: "Tourism, Heritage & Development MSc",
    time: "Sep 2013 - Sep 2014",
    location: "Dumfries, UK",
    description: [""],
  },
  {
    title: "Baku State University",
    position: "Regional Studies of Japan",
    time: "Sep 2007 - May 2012",
    location: "Baku, Azerbaijan",
    description: [""],
  },
  {
    title: "Gunma University",
    position: "Practical Japanese Study Program / Gunma University J Program",
    time: "Sep 2010 - Sep 2011",
    location: "Gunma, Japan",
    description: ["Gunma University Student Exchange Program"],
  },
];
