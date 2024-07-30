'use client';


import Bg from "./components/bg";
import Cards from "./components/cards";
import Cards2 from "./components/cards2";
import Header from "./components/header";
import Technologies from "./components/Technologies";
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-neutral-900">
            <Bg />
            <div className="z-10 max-w-[1100px] w-full flex flex-col text-sm lg:flex">
                <div className="mx-8 my-12 space-y-20">
                    <Header />
                    <Technologies />
                    <Cards2 />
                </div>
            </div>
        </main>
    )
}
