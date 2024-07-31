export default function Cards() {
    const cards = [
        {
            title: "test title 1",
            description: "test description 1",
            link: "",
        },
        {
            title: "test title 2",
            description: "test description 2",
            link: "",
        },
        {
            title: "test title 3",
            description: "test description 3",
            link: "",
        },
        {
            title: "test title 4",
            description: "test description 4",
            link: "",
        }
    ];

    

    return (
        <section className="">
            <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">Me</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
            {cards.map((card, index) => (
                <a key={index} href={card.link} className="rounded-lg p-4 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850 duration-150 transition-all hover:bg-neutral-800/60">
                    <div className="overflow-x-hidden leading-relaxed space-y-2">
                        <h2 className="font-medium text-base text-black dark:text-white truncate">{card.title}</h2>
                        <p className="text-black/50 dark:text-white/30 text-sm line-clamp-2">{card.description}</p>
                    </div>
                </a>
            ))}
            </div>
        </section>
    )
}