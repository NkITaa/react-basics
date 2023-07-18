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
                id="hamburger-button"
                className="cursor-pointer text-3xl focus:outline-none md:hidden"
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
            // widescreen:section-min-height tallscreen:section-min-height sind die sachen aus dem index.css die in der tailwind config registriert wurden -> macht das Hero ganzen viewport ausfüllt
            className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
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

          <section
            id="rockets"
            className="widescreen:section-min-height tallscreen:section-min-height my-12  scroll-mt-20 p-6 "
          >
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

          <section
            id="testimonials"
            className="widescreen:section-min-height  tallscreen:section-min-height my-12  scroll-mt-20 p-6 "
          >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Testimonials
            </h2>
            <figure className="my-12">
              <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  Fagme has always been there for me. Their Explorer rocket
                  arrived in a wooden crate as expected. Life-long customer! A++
                  shopping experience.
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Wiley E. Coyote, Genius
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  The Fagme Adventurer Rocket has thwarted my Illudium Q-36
                  Explosive Space Modulator on several occassions.{" "}
                  <span className="italic">
                    This makes me very, very angry!
                  </span>{" "}
                  Nevertheless, K-9 and I have awarded Fagme the Martian
                  contract for space exploration rockets based on Fagme's
                  quality and sturdy designs.
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;Marvin The Martian &amp; K-9
              </figcaption>
            </figure>
            <figure className="my-12">
              <blockquote className="relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black">
                <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
                  I knew I not only wanted &#8212;{" "}
                  <span className="italic">I needed</span> &#8212; Fagme's
                  Infinity Rocket for my mission in space. Fagme delivered in
                  one day! Nothing says{" "}
                  <q className="italic">Take me to your leader</q> like Fagme's
                  Infinity Rocket! 💯
                </p>
              </blockquote>
              <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
                &#8212;&#8212;Buzz Lightyear
              </figcaption>
            </figure>
          </section>

          <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

          <section
            id="contact"
            className="widescreen:section-min-height tallscreen:section-min-height my-12  scroll-mt-16 p-6 "
          >
            <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Contact Us
            </h2>
            <form
              action="#"
              className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
            >
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                minLength={3}
                maxLength={50}
                placeholder="Subject"
                className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                cols={30}
                rows={10}
                minLength={3}
                maxLength={500}
                placeholder="Message"
                className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
              ></textarea>
              <button className="border-slate900 w-48 rounded-xl border border-solid bg-teal-700 p-3 text-2xl text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none ">
                Submit
              </button>
            </form>
          </section>
        </main>

        <footer id="footer" className="bg-teal-700 text-xl text-white">
          <section className="row mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
            <address>
              <h2>Fagme Rocket-Powered Products, Inc.</h2>
              555 Astro Way
              <br />
              Fairfield, New Jersey 12345-5555
              <br />
              Email:{" "}
              <a href="mailto:inquiries@fagmerockets.com">
                Inquires@FagmeRockets.com
              </a>
              <br />
              Phone: <a href="tel:+15555555555">(555) 555-5555</a>
            </address>
            <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
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
            <div className="flex flex-col sm:gap-2">
              <p className="text-right">
                Copyright &copy;
                <span id="year">{new Date().getFullYear()}</span>
              </p>
              <p className="text-right">All rights reserved.</p>
            </div>
          </section>
        </footer>
      </body>
    </>
  );
}
