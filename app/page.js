import { Paragraph } from "./Components/Paragraph";

const text =
  "We help companies identify product-market fit through user research and iterative testing. By collaborating with internal stakeholders, we solve product and UX challenges by crafting seamless, user-centric solutions and bringing visuals to life from development to launch.";

export default function Home() {
  return (
    <>
      <div className="h-screen"></div>
      <Paragraph value={text} />
      <div className="h-screen"></div>
    </>
  );
}
