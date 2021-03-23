import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Page!</h1>
      <p>Hello, this is my first page made with <b>Nextjs</b>. In this course I'll try to do my best to learn all that I can and I'm gonna practice doing a project on my job. The project's name is: <b>Praxis</b>.</p>
      <p>Link to my <Link href="https://github.com/julioantonio12/testing-nextjs"><a>Github</a></Link></p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

    </Layout>
  )
}