import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Terminal from "../components/Terminal";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Shandhor — Software Engineer</title>
        <meta
          name="description"
          content="Senior Software Engineering student at York University. Interning at Ciena. Previously at Ericsson and Vosyn. Specializing in automation, AI/ML, and backend systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Ali Shandhor — Software Engineer" />
        <meta
          property="og:description"
          content="Senior Software Engineering student. Intern @ Ciena. Python · AI/ML · Automation."
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ali Shandhor — Software Engineer" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Terminal />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
