export default function HomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-black text-gray-300">
        <header className="flex justify-center md:justify-start w-full">
          <h1 className="text-center md:text-left font-bold text-2xl">
            DevaByte
          </h1>
        </header>

        <section className="text-center">
          <h2 className="text-[42px] md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            Coming Soon
          </h2>
          <h4 className="font-bold text-xl md:text-3xl my-2 tracking-widest">
            We are coding it up...
          </h4>
          <p className="mb-4 text-sm md:text-base">
            Just a few days away from our launch. Sign up to get notified!
          </p>
          <form>
            <div className="relative group">
              <input
                type="email"
                className="block p-4 pl-4 w-full text-sm text-gray-100 bg-transparent rounded-lg border border-gray-600 focus:ring-2 focus:outline-none focus:ring-blue-300"
                placeholder="Enter email address"
                required
              />
              <button
                type="submit"
                className="text-black absolute right-1.5 bottom-[5px] bg-white focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-6 py-3"
              >
                Notify Me
              </button>
            </div>
          </form>
        </section>

        <footer className="flex justify-between flex-col md:flex-row p-4 items-center w-full text-xs gap-4">
          <div className="inline-flex gap-1">
            <a href="https://facebook.com" target="_blank">
              Facebook
            </a>
            /
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
            /
            <a href="mailto:devabyte2023@gmail.com" target="_blank">
              Email
            </a>
          </div>
          <div className="text-center md:text-right">
            &copy;{new Date().getFullYear()} DevaByte Technologies.
          </div>
        </footer>
      </main>
    </>
  );
}
