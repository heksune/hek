"use client";

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <div className="text-center font-mono -mt-40">
                <div className="text-9xl font-bold text-zinc-200">404</div>
                <div className="text-4xl font-bold text-zinc-400">Not Found</div>
                <div className="text-lg font-sans font-medium text-zinc-500 mt-4">The page you're looking for doesn't exist.</div>
                <button className="mt-8 px-4 py-2 rounded-full bg-zinc-400 text-zinc-900 font-sans font-medium hover:bg-zinc-500 duration-150" onClick={goBack}>Go back</button>
            </div>
        </main>
    );
}
