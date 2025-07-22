import "./App.scss";
import { Info } from "./components/Info/Info";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Info />
      <About />
      <Footer />
    </>
  );
};
