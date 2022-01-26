import type { NextPage } from 'next';
import { AsciiHeader } from '../components/AsciiHeader';
import { Container } from '../components/Container';
import { FooterLink } from '../components/FooterLink';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <header>
          <AsciiHeader />
        </header>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus,
          quis fugiat laudantium amet tempore adipisci perferendis veritatis
          repudiandae, totam omnis commodi similique veniam at? Officia animi
          sequi dolores nemo? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti cupiditate totam vero eum, unde, dolor dolorum iusto,
          facilis quo minus blanditiis quae quidem qui sed facere? Excepturi
          laborum enim dolor!
        </main>
        <footer>
          <FooterLink href="//github.com/karmek-k/homepage-v4" />
        </footer>
      </Container>
    </>
  );
};

export default Home;
