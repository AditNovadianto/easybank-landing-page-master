import Articles from "./components/Articles";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Benefits />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
