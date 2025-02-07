import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <Gallery />
        <MyFooter />
      </>
    );
  }
}

export default App;
