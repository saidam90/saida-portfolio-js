import { SectionHeader } from "@/components/utils/SectionHeader";
import { GrantItem } from "./GrantItem";

export const Grants = () => {
  return (
    <section className="section-wrapper" id="grants">
      <SectionHeader title="Grants" dir="l" />
      {grants.map((item) => (
        <GrantItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const grants = [
  {
    title: "Rakoon.fun",
    organization: "Radix Ecosystem Fund",
    time: "2024-2025",
    description:
      "The Launch Booster ($15K XRD) and MVP Booster ($5K XRD) awarded to 'Rakoon.fun' (previously radix.meme). 5th place at the ECB Barcelona Hackathon. Team project.",
    link: "https://www.radixdlt.com/blog/mvp-booster-grant-winners-rakoon-fun-defiplaza-oasis",
  },
  {
    title: "BlocuSign",
    organization: "ETH Global (London)",
    time: "March 2024",
    description:
      "4 bounties in 'BlocuSign' project at the ETH Global Hackathon: Safe (Best app integrating the Safe 4337 Module 2nd place), Chainlink (Connect the world ), Chiliz (Pool Prize), Arbitrum (Qualifying Arbitrum Submissions). Team project.",
    link: "https://ethglobal.com/showcase/blocusign-a8dzd",
  },
  {
    title: "Avatar Wallet",
    organization: "ETH London Hackathon",
    time: "Oct 2023",
    description:
      "Best implementation of Scaffold-ETH 2 in 'Avatar Wallet' project at the ETH London Hackathon. Team project.",
    link: "https://www.blog.encode.club/eth-london-hackathon-prizewinners-and-summary-85cdff4d093d",
  },
  {
    title: "State Program on Education of Azerbaijani Youth Abroad",
    organization: "Azerbaijan Republic",
    time: "2013",
    description: "Associated with the University og Glasgow",
    link: "",
  },
  {
    title: "JASSO International Student Scholarship",
    organization: "Japan Student Services Organization (JASSO)",
    time: "2010",
    description: "Associated with Gunma University",
    link: "",
  },
];
