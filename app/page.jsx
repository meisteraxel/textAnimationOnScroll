import TextOne from "./Components/TextOne";
import TextTwo from "./Components/TextTwo";

export default function Home() {
  return (
    <>
      <h1 className="text-7xl font-semibold text-center mt-12">Scroll Down</h1>
      <div className="h-screen"></div>
      <TextOne />
      <TextTwo />
      <div className="h-screen"></div>
    </>
  );
}
