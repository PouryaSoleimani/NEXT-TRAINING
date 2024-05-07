import Link from "next/link";


export default function Home() {
  //VARIABLES
  const name: string = 'POURYA'
  const age: number = 30
  const job: string = "DEVELOPER"



  //RETURN
  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <h1 className="py-10 px-10 bg-zinc-300 text-black rounded-lg text-6xl font-sans font-bold shadow-lg shadow-current">HOME PAGE</h1>
        <h2>{name}-{age}-{job}</h2>
        <ul className="bg-zinc-800 w-screen box-border p-10 mt-10 border-2 border-zinc-600 flex items-center justify-center space-x-10">
          <Link href='/ssg' className="bg-yellow-400 text-3xl p-2 rounded-lg text-black font-bold border-8 border-black">SSG PAGE</Link>
        </ul>
      </main>
    </>
  );
}

