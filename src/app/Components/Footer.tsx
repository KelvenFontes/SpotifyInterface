import Image from "next/image";

import { Play, Shuffle, SkipBack, SkipForward, Repeat, Laptop2, Mic2, LayoutList, Volume, Maximize2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="p-4 bg-zinc-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/album3.png" className="w-full rounded-lg" width={48} height={48} alt="Capa do album" />
                <div className="flex flex-col">
                    <strong className="font-normal">Rope</strong>
                    <span className="text-xs text-zinc-400">Foo Fighthervfvdsfvfsdvdsvdfsvsvvd</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-4">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />

                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black"><Play /></button>

                    <SkipForward size={20} className="text-zinc-200" />
                    <Repeat size={20} className="text-zinc-200" />
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">0:42</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-500">3:22</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <LayoutList size={20} />
                <Mic2 size={20} />
                <Laptop2 size={20} />
                <div className="flex items-center gap-2">
                    <Volume size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
                    </div>

                </div>
                <Maximize2 size={20} />
            </div>

        </footer>
    );
}