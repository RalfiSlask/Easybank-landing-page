
import Header from "./Header";
import IntroImage from "./UI/IntroImage";
import { useState, useEffect } from "react";
import NextGeneration from "./UI/NextGeneration";
import WhyChose from "./UI/WhyChose";
import Articles from "./UI/Articles";
import Footer from "./UI/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); 
    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
      windowWidth > 1200 ? setIsDesktop(true) : setIsDesktop(false);
  }, [windowWidth])

  return (
    <>
      <Header isDesktop={isDesktop} />
      <main>
        <section className="top--section">
          <div className="top--container">
          <IntroImage isDesktop={isDesktop}/>
          <NextGeneration />
          </div>
        </section>
        <section className="mid--section">
          <div className="mid--container">
          <WhyChose />
          </div>
        </section>
        <section className="lower--section">
          <div className="lower--container">
          <Articles />
          </div>
        </section>
        <footer>
          <div className="footer--container">
          <Footer />
          </div>
        </footer>
      </main>
      </>
  );
}

export default App;
