import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <MyNavbar />
      <div className="container-fluid">
        <h4 id="StarWars">Star Wars</h4>
        <Gallery movies="Star%20Wars" />
        <h4 id="HarryPotter">Harry Potter</h4>
        <Gallery movies="Harry%20Potter" />
        <h4 id="Lordrings">Lord of the Rings</h4>
        <Gallery movies="Lord%20of%20the%20Rings" />
      </div>
      <MyFooter />
    </>
  );
};

export default App;
