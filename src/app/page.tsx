import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-black">

      <div className="flex flex-1 pl-2 pr-2 gap-2 m-2">

        <aside className="w-72 rounded-lg">

          <nav className="space-y-5 bg-zinc-900 p-4 rounded-lg">
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><HomeIcon />Home</a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><Search />Search</a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200 hover:text-zinc-100"><Library />Your Library</a>
          </nav>

          <nav className="mt-2 p-4 bg-zinc-900 flex flex-col gap-3 rounded-lg h-[450px]">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniversário</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #2</a>
          </nav>

        </aside>

        <main className="flex-1 bg-zinc-900 p-6 rounded-lg h-[600px] overflow-y-auto appearance-none">
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full bg-black/40"><ChevronLeft /></button>
            <button className="p-1 rounded-full bg-black/40"><ChevronRight /></button>
          </div>

          <h1 className="font-semibold text-3xl mt-5">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album1.png" width={76} height={76} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album1.png" width={76} height={76} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album2.png" width={76} height={76} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album2.png" width={76} height={76} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album3.png" width={76} height={76} alt="Capa do album" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-[#1abc54] text-black ml-auto mr-4 invisible group-hover:visible"><Play /></button>
            </a>
            <a href="" className="group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/album3.png" width={76} height={76} alt="Capa do album" />
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

      <footer className="p-6 bg-zinc-950 flex items-center justify-between">
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </div >
  )
}
