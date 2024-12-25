import Link from "next/link";





const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">

      {/* heading */}
      <div>
        <h1 className="mt-20 text-[25px] font-[600] md:text-[30px] lg:text-[40px] text-black text-center py-5 lg:py-16"> Data Fetching: CSR & SSR </h1>

        <div className="grid lg:grid-cols-2 gap-7 md:gap-10 lg:gap-1">
          {/* Client side */}
          <div className="w-[320px] sm:w-[400px] md:w-[500px] h-auto m-auto py-5 px-5 rounded-[10px] bg-white shadow-xl">
            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] font-600 text-black"> Client Side Rendering </h1>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] lg:h-[150px] text-zinc-700 py-3 "> Client-Side Rendering is a technique where the browser renders the web page dynamically using JavaScript. The server sends a basic HTML structure, and the client-side JavaScript code takes care of rendering the content.  </p>
            <Link href="/client-side" target="_blank">
              <button className="px-10 py-2 text-[10px] lg:text-[14px] bg-yellow-500 hover:bg-yellow-600 rounded-[10px] text-white"> Client Side Rendering </button>
            </Link>
          </div>
            

            {/* server side  */}
          <div className="w-[330px] sm:w-[400px] md:w-[500px] h-auto m-auto py-5 px-5 rounded-[10px] bg-white shadow-xl">
            <h1 className="text-[20px] md:text-[25px] lg:text-[30px] font-600 text-black"> Server Side Rendering </h1>
            <p className="text-[12px]  md:text-[14px] lg:text-[16px] lg:h-[150px] text-zinc-700 py-3 "> Server-Side Rendering is a technique where the server generates the HTML content on each request, and the browser receives a fully rendered HTML page  </p>
            <Link href="/server-side" target="_blank">
              <button className="px-10 py-2 text-[10px] lg:text-[14px] bg-yellow-500 hover:bg-yellow-600 rounded-[10px] text-white"> Server Side Rendering </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;





















{/* <Link href="/server-side" target="_blank">
<button className="bg-red-600 rounded-[10px]"> Server side data Fetching</button>
</Link>
<br />
<br />
<Link href="/client-side" target="_blank">
<button className="bg-blue-950 rounded-[10px] text-white"> Client side data Fetching</button>
</Link> */}