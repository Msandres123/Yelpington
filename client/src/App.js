// functional components (Nav-Bar, Home Page, and Dedicated Restaurant Page )
import Home from "./components/Home";
import Nav from "./components/Nav";
import RestPage from "./components/RestPage";
//CSS style sheet used to style the page
import "./styles/App.css";
// Route and Switch imported to allow transitions between components (appears to be multiple pages, but really only a single react page)
import { Route, Switch } from "react-router-dom";

//App function display the entire webpage which functions as a website
function App(props) {
  //JSX HTML
  return (
    <div id="App">
      {/* Title of the webpage */}
      <h1>Yelpington</h1>
      {/* Nav-Bar used to navigate through each restaurant and back home */}
      <Nav />
      {/* Switch used to allow transitions between home page and restaurant info page */}
      <Switch>
        {/* Route that directs user to the home page */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Route that directs user to restaurant page  */}
        <Route path="/restaurant/:id" component={RestPage} />
      </Switch>
    </div>
  );
}

export default App;
