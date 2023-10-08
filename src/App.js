import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router} from "react-router-dom";
import Nav from "./components/nav";
import { ShopContextProvider } from "./context/shopContext";
import Welcome from "./components/welcome";
import RoutesMap from "./routes";
import Header from "./components/layouts/Header";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Welcome />
         <RoutesMap/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;


// sass , tailwind, typescript, redux