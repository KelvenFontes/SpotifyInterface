import { Home, Search, Library, } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 rounded-lg">

            <nav className="space-y-5 bg-zinc-900 p-4 rounded-lg">
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><Home />Home</a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><Search />Search</a>
                <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><Library />Your Library</a>
            </nav>

            <nav className="mt-2 p-4 bg-zinc-900 flex flex-col gap-3 rounded-lg h-[426px]">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniversário</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #2</a>
            </nav>

        </aside>
    );
}