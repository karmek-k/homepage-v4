import type { NextPage } from 'next';
import { AsciiHeader } from '../components/AsciiHeader';
import { Container } from '../components/Container';
import { FooterLink } from '../components/FooterLink';
import Head from 'next/head';

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
          <i>
            <p>
              A hacker is someone who enjoys playful cleverness—not necessarily
              with computers. The programmers in the old MIT free software
              community of the 60s and 70s referred to themselves as hackers.
              Around 1980, journalists who discovered the hacker community
              mistakenly took the term to mean “security breaker.”
            </p>

            <p>
              Please don&apos;t spread this mistake. People who break security
              are “crackers.”
            </p>
          </i>

          <p>
            (from{' '}
            <a href="https://www.gnu.org/philosophy/words-to-avoid.en.html#Hacker">
              gnu.org
            </a>
            )
          </p>
        </main>
        <footer>
          <FooterLink href="//github.com/karmek-k/homepage-v4" />
        </footer>
      </Container>
    </>
  );
};

export default Home;
