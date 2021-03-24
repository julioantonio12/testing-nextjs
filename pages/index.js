import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Page!</h1>
      <p>
        Hello, this is my first page made with <b>Nextjs</b>. In this course
        I'll try to do my best to learn all that I can and I'm gonna practice
        doing a project on my job. The project's name is: <b>Praxis</b>. I
        invite you to check out the blogs below. This is a simple new comment to test PR's
      </p>
      <p>
        Link to my{" "}
        <Link href="https://github.com/julioantonio12/testing-nextjs">
          <a>Github</a>
        </Link>
      </p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
