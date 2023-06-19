"use client";
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';

export default function Title(props: { title: string }) {
    const textRef = useRef<HTMLInputElement>(null)
    const [count, setCount] = useState<number>(0);
    const countUp: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setCount((count) => count + 1);
    }, [])
    type TitleProps = {
        title: string;
    };
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">        
            <div className="fixed bottom-0 left-0 flex h-48 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                </a>
            </div>
        </div>
    )
}

