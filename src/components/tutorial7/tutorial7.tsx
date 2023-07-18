import rocketdab from "./images/rocketdab.png";
import rocketman from "./images/rocketman.png";
import rocketride from "./images/rocketride.png";
import roketlaunch from "./images/rocketlaunch.png";

export function Tutorial7() {
  return (
    <>
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <header className="sticky top-0 z-10 bg-teal-700 text-white">
          <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
            <h1 className="text-3xl font-medium">
              <a href="hero">🚀 Fagme Rockets</a>
            </h1>
            <div>
              <button
                id="mobile-open-button"
                className="text-3xl focus:outline-none sm:hidden"
              >
                &#9776;
              </button>
              <nav
                className="hidden space-x-8 text-xl sm:block"
                aria-aria-label="main"
              >
                <a href="#rockets" className="hover:opacity-90">
                  Our Rockets
                </a>
                <a href="#testimonials" className="hover:opacity-90">
                  Testimonials
                </a>
                <a href="#contact" className="hover:opacity-90">
                  Contact Us
                </a>
              </nav>
            </div>
          </section>
        </header>
        <main className="mx-auto max-w-4xl">
          <section
            id="hero"
            className="mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
          >
            <article className="sm:w-1/2">
              <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
                We boldly go{" "}
                <span className="text-indigo-700 dark:text-indigo-300">
                  Where No One
                </span>{" "}
                has gone before...
              </h2>
              <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                We are the leading provider of space travel in the galaxy.
              </p>
              <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                Think Fagme Rockets.
              </p>
            </article>
            <img src={rocketdab} alt="rocketdab" className="w-1/2" />
          </section>

          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

          <section id="rockets" className="my-12 scroll-mt-20 p-6">
            <h2 className="mb-6 text-center text-4xl  font-bold text-slate-900 dark:text-white sm:text-5xl">
              Our Rockets
            </h2>
            <ul className="mx-auto my-12 flex list-none flex-col content-center gap-8 sm:flex-row">
              <li className="flex w-2/3 flex-col items-center self-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
                <img src={rocketman} alt="Explorer" className="mb-6 w-1/2" />
                <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                  Explorer
                </h3>
                <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                  $
                </p>
                <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                  Affordable Exploration
                </p>
              </li>
              <li className="flex w-2/3 flex-col  items-center self-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
                <img src={rocketride} alt="Adventurer" className="mb-6 w-1/2" />
                <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                  Adventurer
                </h3>
                <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                  $$
                </p>
                <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                  Best Selling Rocket!
                </p>
              </li>
              <li className="flex w-2/3 flex-col  items-center self-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
                <img src={roketlaunch} alt="Infinity" className="mb-6 w-1/2" />
                <h3 className="text-center text-3xl text-slate-900 dark:text-white">
                  Infinity
                </h3>
                <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
                  $$$
                </p>
                <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
                  Luxury Space Travel
                </p>
              </li>
            </ul>
          </section>

          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

          <section id="testimonials" className="my-12 p-6">
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Testimonials
            </h2>
          </section>

          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

          <section id="contact" className="my-12 p-6">
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Contact Us
            </h2>
          </section>
        </main>
      </body>
    </>
  );
}
