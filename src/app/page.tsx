import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Laptop2, Mic2, LayoutList, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden">

      <div className="flex flex-1 pl-2 pr-2 gap-2 m-2">

        <aside className="w-72 rounded-lg">

          <nav className="space-y-5 bg-zinc-900 p-4 rounded-lg">
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><HomeIcon />Home</a>
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

        <main className="flex-1 bg-zinc-900 p-6 rounded-lg h-[578px] overflow-y-auto appearance-none">
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full bg-black/40"><ChevronLeft /></button>
            <button className="p-1 rounded-full bg-black/40"><ChevronRight /></button>
          </div>

          <h1 className="font-semibold text-3xl mt-5">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album1.png" width={72} height={72} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album1.png" width={72} height={72} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album2.png" width={72} height={72} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album2.png" width={72} height={72} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album3.png" width={72} height={72} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album3.png" width={72} height={72} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-8">Made for Kelven</h2>

          <div className="grid grid-cols-5 gap-6 mt-4">
            <a href="" className=" group bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album3.png" className="w-full rounded-lg" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text-sm text-zinc-400">Hello world</span>
            </a>
            <a href="" className=" group bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album3.png" className="w-full rounded-lg" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text-sm text-zinc-400">Hello world</span>
            </a>
            <a href="" className=" group bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album3.png" className="w-full rounded-lg" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text-sm text-zinc-400">Hello world</span>
            </a>
            <a href="" className=" group bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album3.png" className="w-full rounded-lg" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text-sm text-zinc-400">Hello world</span>
            </a>
            <a href="" className=" group bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album3.png" className="w-full rounded-lg" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Wasting Light</strong>
              <span className="text-sm text-zinc-400">Hello world</span>
            </a>
          </div>

        </main>
      </div >

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
    </div >
  )
}
