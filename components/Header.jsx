import Discord from "./discord";

export default function Header() {
    return (
        <div className="mt-20">
            <div className="max-w-3xl">
                <div>
                    <h className="text-black/70 dark:text-white/50 text-lg font-medium uppercase">Hello, Wecome To hek universe.</h>
                    <p className="mt-4 text-white/70 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat perferendis dignissimos quod odio corrupti autem illo. Minus, iusto explicabo. Eligendi, rem esse tempora ea nulla obcaecati officia blanditiis provident hic quas ipsa, vitae voluptate atque.</p>
                </div>
                <Discord />
            </div>
        </div>
    )
}