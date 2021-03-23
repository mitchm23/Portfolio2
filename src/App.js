import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return(
  <Router>
      <div className="App">
        <Nav />
        <main className="container">
        <Switch>
          <Route exact path={["/", "/Home"]} component={Home} />
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/Contact" component={Contact}/>
        </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;