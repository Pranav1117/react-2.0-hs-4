import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Student from "./Components/Student";
import RouteCompo from "./Utilities/RouteCompo";

function App() {
  return (
    <>
      <div className="App">
        <RouteCompo>
          <Home />
          <Student />
          <Contact />
        </RouteCompo>
      </div>
    </>
  );
}

export default App;
