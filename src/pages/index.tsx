import Image from "next/image";
import Link from "next/link";
import css from "../styles/Home.module.css";

const Page = () => {
  return (
    <div className={css.container}>
      <aside className={css.aside}>
        <figure className={css.aside_figure}>
          <Image
            className={css.profile}
            src="/profile.jpeg"
            alt="profile"
            width={200}
            height={200}
          ></Image>
          <figcaption>
            <h1 className={css.aside_figure_h1}>@zen</h1>
            <span className={css.aside_figure_h1_span1}>Dražen Buljovčić</span>
            <span className={css.aside_figure_h1_span2}>Software Engineer</span>
            <span className={css.aside_figure_h1_span2}>
              Serbia 🇷🇸 | Berlin 🇩🇪
            </span>
          </figcaption>

          <nav className={css.aside_social}>
            <Link
              className={css.aside_social_gh_a}
              href="https://github.com/drazenbuljovcic/"
              target="_blank"
            >
              <Image
                className={css.aside_social_gh}
                src="/gh.png"
                alt="github"
                width={50}
                height={50}
              ></Image>
            </Link>
            <Link
              href="https://www.linkedin.com/in/drazen-buljovcic-a3a5ab100/"
              className={css.aside_social_ln_a}
              target="_blank"
            >
              <Image
                className={css.aside_social_ln}
                src="/ln.png"
                alt="linkedin"
                width={50}
                height={50}
              ></Image>
            </Link>
          </nav>
        </figure>
      </aside>
      <main className={css.main}>
        <nav></nav>
        <section className={css.blog}>
          <section className={css.blog_item}>
            <h1>Observability whitepaper - Next.js</h1>
            <hr />
            <div className={css.blog_item_showcase}>
              <p
                className={css.linkthrough_cta}
                // href="https://github.com/drazenbuljovcic/otel-next/issues/1"
                // target="_blank"
                onClick={() => window.dataLayer.push({ event: 'click_gh_issue' })}
              >
                Check out the{" "}
                <i
                  style={{ fontSize: "2rem" }}
                  className="fa-brands fa-github"
                ></i>{" "}
                issue
                <i
                  className={css.linkthrough_cta_link + " fa-solid fa-link"}
                ></i>
              </p>

              <div className={css.main_text}>
                <p className={css.main_text_item}>
                  A small guide into instrumentation using our favorite platform
                  for building applications - Next.js.
                  <Image
                    src="/nextjs_icon.png"
                    alt="HoneyComb Observability whitepaper"
                    width={25}
                    height={25}
                  ></Image>
                </p>
                <p className={css.main_text_item}>
                  We are enabling <u>Observability Driven Development</u> by
                  default!
                </p>
                <p className={css.main_text_item}>
                  Creating a new product for the community around this framework
                  and Vercel to easily visualize their application behavior
                  through use of dashboards.
                  <svg
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                    fill="white"
                    width="20"
                    viewBox="0 0 76 65"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="black" />
                  </svg>
                </p>
                <p>The value proposition of this endeavour is immense.</p>
                <p>Shout out to the Honeycomb community | @pollinators.</p>
              </div>
              <Image
                src="/observability_paper_honeycomb_image.png"
                alt="HoneyComb Observability whitepaper"
                width={100}
                height={100}
                layout="responsive"
                className={css.linkthrough_image}
              ></Image>

              <span className={css.linkout_image_link}>
                <Image
                  src="/honeycomb.svg"
                  alt="honeycomb.io"
                  width={100}
                  height={100}
                ></Image>
                <span className={css.linkout_image_link_text}>
                  <span>Powered by</span>{" "}
                  <Link href={"https://www.honeycomb.io/"} target="_blank">
                    <b>honeycomb</b>

                    <i
                      className={css.linkout_link_text + " fa-solid fa-link"}
                    ></i>
                  </Link>
                </span>
              </span>
            </div>
          </section>
        </section>
      </main>
      <footer className={css.footer}>
        <div className={css.footer_addition}>
          <a
            href="https://drive.google.com/file/d/1cBvvH94DmbX1mE5gAA6dtFRyZG2wILQe/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-regular fa-envelope"></i>{" "}
            <span>Personal Profile (CV)</span>
          </a>
        </div>
        <span className={css.footer_email}>
          <i className="fa-solid fa-inbox"></i>{" "}
          <a href="mailto:drazen.buljovcic@gmail.com">
            drazen.buljovcic@gmail.com
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Page;
