import { SectionHeader } from "@/components/utils/SectionHeader";
import { OtherItem } from "./OtherItem";

export const Other = () => {
  return (
    <section className="section-wrapper" id="other">
      <SectionHeader title="Other" dir="l" />
      {other.map((item) => (
        <OtherItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const other = [
  {
    title: "BlocuSign",
    organization: "ETH Global (London)",
    time: "March 2024",
    description:
      "The project is the winner of Safe (Best app integrating the Safe), Chainlink (Connect the world with Chainlink), Chiliz (Pool Prize), Arbitrum (Qualifying Arbitrum Submissions). BlocuSign combines Multi-sigs with AA & Off-chain compute to allow decentralized organizations to sign PDF documents. This would allow DAOs to produce invoice-documents, tax-forms, and other legal documents in a more decentralized fashion. This is crucial for on-boarding the next-generation of Web3 users since it allows Web3 organizations/entities to trustlessly satisfy obligations in the Web2/legal world. Team project.",
    link: "https://ethglobal.com/showcase/blocusign-a8dzd",
  },
  {
    title: "Avatar Wallet",
    organization: "ETH London Hackathon",
    time: "Oct 2023",
    description:
      "The project secured the 1st place among the three winners for the best implementation of Scaffold-ETH 2, as part of the awards presented at the ETH London Hackathon. Team Project.",
    link: "https://github.com/tommyzbear/encode-eth-london-2023?tab=readme-ov-file",
  },
];
