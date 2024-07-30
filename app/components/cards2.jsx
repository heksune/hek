export default function Cards2() {
    const cards = [
        {
            title: "test title 1",
            description: "test description 1",
            badge: "test badge 1",
            link: "",
        },
        {
            title: "test title 2",
            description: "test description 2",
            badge: "test badge 2",
            link: "",
        }
    ];

    

    return (
        <section className="grid gap-x-8 gap-y-24 md:grid-cols-2">
            <div>
                <div className="flex items-center gap-4 justify-between">
                    <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">Experience</h3>
                    <button className="text-black/50 text-sm hover:underline dark:text-white/30">Show More</button>
                </div>
                <div className="mt-4 grid gap-3">
                {cards.map((card, index) => (
                    <a key={index} href={card.link} className="rounded-lg p-4 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850 duration-150 transition-all hover:bg-neutral-800/60">
                        <div className="overflow-x-hidden leading-relaxed space-y-2">
                            <div className="flex space-x-2 items-center justify-between">
                                <h3 className="font-medium text-base text-black dark:text-white/80 truncate">{card.title}</h3>
                                <span className="text-black/50 dark:text-white/30 text-sm">{card.badge}</span>
                            </div>
                            <div className="truncate text-sm text-black/50 dark:text-white/30">{card.description}</div>
                        </div>
                    </a>
                ))}
                </div>
             </div>

             <div>
                <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">Education</h3>
                <div className="mt-4 grid gap-3">
                {cards.map((card, index) => (
                    <a key={index} href={card.link} className="rounded-lg p-4 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850 duration-150 transition-all hover:bg-neutral-800/60">
                        <div className="overflow-x-hidden leading-relaxed space-y-2">
                            <h2 className="font-medium text-black dark:text-white truncate">{card.title}</h2>
                            <p className="text-black/50 dark:text-white/30 text-sm line-clamp-2">{card.description}</p>
                        </div>
                    </a>
                ))}
                </div>
             </div> 
        </section>
    )
}