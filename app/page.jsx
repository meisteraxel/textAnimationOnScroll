import ParagraphImage from "./Components/ParagraphImage";
import ParagraphImageTwo from "./Components/ParagraphImageTwo";

export default function Home() {
  return (
    <>
      <h1 className="text-7xl font-semibold text-center mt-12">Scroll Down</h1>
      <div className="h-screen"></div>
      <ParagraphImage />
      <ParagraphImageTwo />
      <div className="h-screen"></div>
    </>
  );
}
