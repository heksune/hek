export default function Background() {
  return (
    <div className="relative flex w-full h-full flex-col">
      <div className="fixed inset-0 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-[-14.5px] ml-[-41.5rem] h-[30rem] w-[80rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-400/40 to-zinc-400 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"><svg aria-hidden="true" className="absolute -inset-y-1/2 inset-x-0 h-[200%] w-full skew-x-[18deg] stroke-transparent mix-blend-overlay dark:fill-[#09090B]"><defs><pattern id=":S2:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" strokeWidth="0" fill="url(#:S2:)"></rect></svg></div>
          <svg viewBox="0 0 1113 440" aria-hidden="true" className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] dark:fill-[#09090B] blur-[26px]"><path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path></svg>
        </div>
      </div>
      <div className="fixed z-20 bottom-0 w-full h-12 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}
