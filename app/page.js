import Bg from "@/components/Bg";
import Cards from "@/components/Cards";
import Cards2 from "@/components/Cards2";
import Header from "@/components/Header";
import Repos from "@/components/Repos";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-neutral-900">
      <Bg />
      <div className="z-10 max-w-[1100px] w-full flex flex-col text-sm lg:flex">
        <div className="mx-8 my-12 space-y-20">
          <Header />
          <Cards2 />
          <Technologies />
          <Repos />
        </div>
      </div>
    </main>
  );
}
