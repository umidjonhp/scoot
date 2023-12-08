import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import { Route } from "react-router-dom/cjs/react-router-dom"
import {
  Navbar,
  Footer,
} from "./components/layout";
import {
  Home,
  About,
  Careers,
  Location,
} from "./pages";

export const App = () => {
  return (
    <> 
      <div className="relative">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/careers'>
          <Careers />
        </Route>
        <Route exact path='/locations'>
          <Location />
        </Route>
      </Switch>

      <Footer />
      </div>
    </>
  )
}
