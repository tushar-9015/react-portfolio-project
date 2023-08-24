import { useContext } from "react";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#191A19" : "#FFF4F4",
        color: darkMode && "#FFF4F4",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
