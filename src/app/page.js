
import Background from "@/components/Background";
import Header from "../components/Header";
import Experiences from "@/components/Experiences";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Background />
      <main className="mx-auto w-full max-w-[800px] px-8 z-10 flex flex-col">
        <Header />
        <div className="w-full grid grid-cols-3 gap-8 mt-28 mb-96">
          <Experiences />
          <Socials />
        </div>
      </main>
    </main>
  );
}
