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
    title: "Avatar Wallet",
    organization: "ETH London Hackathon - Scaffold-ETH 2 Bounty winner",
    time: "Oct 2023",
    description:
      "The project secured the 1st place among the three winners for the best implementation of Scaffold-ETH 2, as part of the awards presented at the ETH London Hackathon.",
    link: "https://github.com/tommyzbear/encode-eth-london-2023?tab=readme-ov-file",
  },
];
