import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <section>{ children }</section>
      </main>
      <Footer />
    </>
  );
};
