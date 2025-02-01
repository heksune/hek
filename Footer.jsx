import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full border-t border-zinc-800 p-5 mb-4 relative bottom-0 "
        >
            <div className="flex items-center justify-between">
                <p className="text-zinc-400 font-sans font-medium text-sm">
                    <span className="text-zinc-200">heksune</span>.xyz © {date} — All rights reserved.
                </p>
                <p className="text-zinc-400 font-sans font-medium text-sm flex gap-1 items-center justify-center">
                    Developed by
                    <a href="https://heksune.xyz" className="text-white hover:underline">hek</a>
                    with
                    <BsFillEmojiSunglassesFill className="hover:text-white duration-300" />
                </p>
            </div>
        </div>
    );
}
