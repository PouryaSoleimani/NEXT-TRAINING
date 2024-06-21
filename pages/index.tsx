//^ HOME PAGE 
import Link from "next/link";




export default function Home() {

  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <h1 className="py-10 px-10 bg-zinc-900 text-zinc-300 rounded-lg text-4xl font-sans font-bold hover:scale-90 duration-300 cursor-pointer">NEXT TRAINIG HOME PAGE</h1>
        <ul className="bg-zinc-700 w-screen box-border p-10 mt-10 border-2 border-zinc-600 flex flex-wrap items-center justify-center space-x-2">
          <Link href='/ssg' className="bg-red-400 text-2xl px-2 py-1 rounded-xl text-black font-bold border-[10px] border-zinc-950">SSG</Link>
          <Link href='/ssr' className="bg-blue-400 text-2xl px-2 py-1 rounded-xl text-black font-bold border-[10px] border-zinc-950">SSR</Link>
          <Link href='/csr' className="bg-slate-700 text-2xl px-2 py-1 rounded-xl text-white font-bold border-[10px] border-zinc-950">CSR</Link>
          <Link href='/search' className="bg-violet-400 text-2xl px-2 py-1 rounded-xl text-black font-bold border-[10px] border-zinc-950">SEARCH</Link>
          <Link href='/sort' className="bg-yellow-400 text-2xl px-2 py-1 rounded-xl text-black font-bold border-[10px] border-zinc-950">SORT</Link>
          <Link href='/swr' className="bg-stone-800 text-2xl px-2 py-1 rounded-xl text-white font-bold border-[10px] border-zinc-950">SWR</Link>
          <Link href='/testpage' className="bg-pink-400 text-2xl px-2 py-1 rounded-xl text-white font-bold border-[10px] border-zinc-950">TEST</Link>
          <Link href='/users' className="bg-green-400 text-2xl px-2 py-1 rounded-xl text-black font-bold border-[10px] border-zinc-950">USERS</Link>
          <Link href='/comments' className="bg-orange-400 text-2xl px-2 py-1 rounded-xl text-black font-bold border-[10px] border-zinc-950">COMMENTS</Link>
        </ul>
      </main>
    </>
  );
}

