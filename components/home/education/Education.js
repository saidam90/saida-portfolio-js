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
  // {
  //   title: "University of Helsinki",
  //   position: "Full Stack Open 2024 Online Program",
  //   time: "Jan 2024 - May 2024",
  //   location: "Remote",
  //   description: [""],
  // },
  {
    title: "Le Wagon London",
    position: "Web Development Bootcamp",
    time: "Oct 2022 - Dec 2022",
    location: "London, UK",
    description: (
      <>
        <p>
          Attended Le Wagon London in person (Batch #1052). Full-time intensive
          coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL,
          git, GitHub, Heroku and Ruby on Rails. Selected as lead developer
          after pitching my project idea (1 of ~20 chosen by peers). Led a team
          of 4 to design, build, and ship two full-stack demo-apps in 3 weeks:
        </p>
        <ul>
          <li>
            - FluffyFriend: MVP demo app shipped in 1 week, leading both
            front-end and back-end development.
          </li>
          <li>
            - Re:Reader: MVP demo app shipped in 2 weeks, with me leading mainly
            front-end development.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "University of Glasgow",
    position: "MSc in Tourism",
    time: "Sep 2013 - Sep 2014",
    location: "Dumfries, UK",
    description: [""],
  },
  {
    title: "Baku State University",
    position: "BSc in Regional Studies",
    time: "Sep 2007 - May 2012",
    location: "Baku, Azerbaijan",
    description: [""],
  },
  {
    title: "Gunma University",
    position: "Gunma University J Program",
    time: "Sep 2010 - Sep 2011",
    location: "Gunma, Japan",
    description: ["Gunma University Student Exchange Program"],
  },
];
