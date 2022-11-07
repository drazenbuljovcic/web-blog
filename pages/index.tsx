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
            <span className={css.aside_figure_h1_span2}>Serbia 🇷🇸</span>
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
              <figure className={css.blog_item_figure}>
                <Image
                  src="/observability_paper_honeycomb_image.png"
                  alt="honeycomb visual"
                  width={200}
                  height={50}
                ></Image>

                <Link href="https://github.com/drazenbuljovcic/otel-next/issues/1">
                  GH issue
                </Link>

                <figcaption className={css.blog_item_figure_caption}>
                  Observability whitepaper - Next.js
                </figcaption>
              </figure>
              <div className={css.blog_item_short}>Honeycomb</div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Page;
