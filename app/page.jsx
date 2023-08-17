

import Link from "next/link"


export default async function Static() {


  return (
    <main className="flex min-h-screen flex-col gap-12">
        <div className="bg-white text-gray-700 p-4 rounded-md">
          <h1 className="text-4xl font-bold md:text-4xl">hello World</h1>
          <p className="text-gray-500">This is a sample page</p>
        </div>
        <div className="bg-white hover:bg-slate-100 transition-colors duration-500 text-gray-700 p-4 rounded-md">
          <h1 className="text-4xl font-bold md:text-4xl">hello World</h1>
          <p className="text-gray-500">This is a sample page</p>
        </div>
        <div className="bg-white text-primary p-4 rounded-md">
          <h1 className="text-4xl font-bold md:text-4xl">hello World</h1>
          <p className="text-gray-500">This is a sample page</p>
        </div>
    </main>
  )
}
