import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <MyNavbar />
      <h4>Star Wars</h4>
      <Gallery movies="Star%20Wars" />
      <h4>Harry Potter</h4>
      <Gallery movies="Harry%20Potter" />
      <h4>Lord of the Rings</h4>
      <Gallery movies="Lord%20of%20the%20Rings" />
      <MyFooter />
    </>
  );
};

export default App;
