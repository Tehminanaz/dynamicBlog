import Link from "next/link";
import { BiCoffeeTogo } from "react-icons/bi";

export default function Hero() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-40 px-36">
      {/* Left Section */}
      <section className="flex flex-col gap-10">
        {/* Hero Titles */}
         {/* Background tech icons */}
         <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
          <div className="absolute w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-3xl top-1/3 left-1/4 animate-pulse" />
          <div className="absolute w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl top-1/4 right-1/3 animate-pulse" />
          <div className="absolute w-20 h-20 bg-green-500 opacity-30 rounded-full blur-2xl bottom-1/4 left-1/3 animate-pulse" />
        </div>
        <section className="text-5xl md:text-5xl leading-tight">
          <h3 className="leading-[160%]">
            Code <br />
            <b className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              with
            </b>{" "}
            Tehmina
          </h3>
        </section>

        {/* Hero Text */}
        <section>
          <p className="text-lg">
            I am a FullStack Engineer, an adept problem solver, and a competent
            user of engineering tools. I can use my technical expertise and
            critical thinking to solve problems, making me a significant asset
            in any academic or professional situation.
          </p>
        </section>

        {/* Hero Buttons */}
        <section className="flex items-center gap-6">
          <Link
            href="/blogs"
            className="bg-white py-2.5 px-5 rounded-md text-black no-underline font-bold text-sm"
          >
            View blogs
          </Link>
          <a
            href=""
            target="_blank"
            className="flex items-center gap-2 text-white no-underline"
          >
            <BiCoffeeTogo className="text-yellow-500 text-lg" />
            <span className="text-sm">Buy me coffee</span>
          </a>
        </section>

        {/* Hero Profile */}
        <section className="flex items-center gap-2">
          <div
            style={{
              backgroundImage: `url("")`,
            }}
            className="h-10 w-10 bg-white rounded-md bg-cover bg-no-repeat"
          ></div>
          <section className="flex flex-col">
            <h3 className="text-lg">Tehmina Naz</h3>
            <a
              href=""
              target="_blank"
              className="text-blue-500 text-xs no-underline"
            >
              Visit my portfolio website
            </a>
          </section>
        </section>
      </section>

      {/* Right Section */}
      <section className="relative flex flex-col items-end max-h-full ">
        <section className="h-full w-[80%] border border-gray-400 rounded-lg">
          <section className="w-full flex items-center justify-between p-2.5 px-3 border-b border-gray-400 bg-black rounded-t-md">
            <h4 className="text-sm">Snippet of the week</h4>
          </section>
          <section className="w-full max-h-full relative z-0">
            <div
              className="overflow-hidden mx-auto rounded-b-lg w-full max-w-[678.25px] relative"
              style={{
                paddingBottom: "108.80943604865463%",
              }}
            >
              <iframe
                width="678.25"
                height="738"
                title=""
                src="https://snappify.com/embed/d979b4af-ef28-403e-aa51-6b32707db714?responsive=1&p=1&autoplay=1&b=1"
                allow="clipboard-write"
                allowFullScreen
                loading="lazy"
                style={{
                  background: "#000000",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                }}
                frameBorder="0"
              ></iframe>
            </div>
          </section>
        </section>
        <section className="absolute bottom-[10%] left-0 w-[85%] border border-gray-400 rounded-lg z-10">
          <section className="w-full flex items-center justify-between p-2.5 bg-black border-b border-gray-400 rounded-t-md">
            <span className="text-sm">React JS</span>
          </section>
          <section className="w-full p-2.5 flex flex-col gap-0.5 bg-gray-900 rounded-b-md">
            <h3 className="text-lg">Data fetching with JavaScript</h3>
            <p className="text-sm">
              This hook has implemented the best practices when you want to
              fetch data from an API into your project.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
