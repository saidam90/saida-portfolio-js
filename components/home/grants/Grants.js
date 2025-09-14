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
    time: "Dec 2024",
    description:
      "The MVP Booster ($5K XRD) awarded to 'Rakoon.fun' (previously radix.meme). Team project.",
    link: "https://rakoon.fun/",
  },
  {
    title: "Rakoon.fun",
    organization: "ECB Barcelona Hackathon",
    time: "Sep 2024",
    description:
      "5th place ($1K XRD) with the 'radix.meme' project (rebranded to 'Rakoon.fun') at the ECB Barcelona Hackathon. Team project.",
    link: "https://www.radixdlt.com/blog/european-blockchain-convention-event-highlights",
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
];
