
import Background from "@/components/Background";
import Header from "../components/Header";
import Experiences from "@/components/Experiences";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center ">
      <Header />
      <Spotlight />
      <Technologies />

      {/* <Experiences /> 
            <div className="w-full grid grid-cols-2 gap-8 my-28">
        <Experiences />
      </div>
      */}

    </main>
  );
}
