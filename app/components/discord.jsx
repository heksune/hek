'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Discord() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDiscordData = async () => {
            try {
                const res = await fetch(`https://api.lanyard.rest/v1/users/837033284705189919`);

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }
        };

        getDiscordData();
    }, []);

    if (error) {
        return;
    }

    if (!data) {
        return;
    }

    const codeActivity = data.data.activities.find(activity => activity.name.includes('Code'));

    let largeImageUrl = '';
    if (codeActivity && codeActivity.assets && codeActivity.assets.large_image) {
        largeImageUrl = codeActivity.assets.large_image
            .replace(/^mp:external\/[^/]+\//, '')
            .replace(/^https\//, 'https://');
    }

    return (
        
        <div className="mt-4 grid gap-4 md:grid-cols-2">
            { largeImageUrl ? (
            <a className="rounded-lg p-4 border-neutral-800 border-[1px] bg-neutral-850">
                    <div className="flex items-center space-x-4">
                        <Image src={largeImageUrl} alt="Activity Image" width={50} height={50} className="rounded-md" />
                        <div>
                            <h className="font-medium text-black dark:text-white">{codeActivity ? codeActivity.name : "No Code Activity"}</h>
                            <h2 className="font-medium text-xs text-white/50">{codeActivity ? codeActivity.details : ""}</h2>
                            <p className="font-medium text-xs text-white/30 line-clamp-4">{codeActivity ? codeActivity.state : ""}</p>
                        </div>
                    </div>
            </a>
            ) : (
            <a>

            </a>
        )}
        </div>
    );
}
