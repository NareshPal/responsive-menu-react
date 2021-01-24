import { Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Service from "./components/Service"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/Service" component={Service} />
      </Switch>
    </>
  )
}

export default App
