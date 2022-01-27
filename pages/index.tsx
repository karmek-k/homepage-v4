import type { NextPage } from 'next';
import { AsciiHeader } from '../components/AsciiHeader';
import { Container } from '../components/Container';
import { FooterLink } from '../components/FooterLink';
import Head from 'next/head';
import { HackerText } from '../components/HackerText';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>karmek-k</title>
      </Head>
      <Container>
        <header>
          <AsciiHeader />
        </header>
        <main>
          <HackerText />
        </main>
        <footer>
          <FooterLink href="//github.com/karmek-k/homepage-v4" />
        </footer>
      </Container>
    </>
  );
};

export default Home;
