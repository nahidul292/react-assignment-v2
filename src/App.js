import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import About from './components/About/About';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div className="">
      <Router>
        {/* <div>
        <nav >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/teams">Team</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
        </nav> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <Link to="/"><a class="navbar-brand" >SportHome</a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/home"><a class="nav-link active" aria-current="page">Home</a></Link>
                </li>
                <li class="nav-item">
                  <Link to="/about"><a class="nav-link active" aria-current="page">About us</a></Link>
                </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/teams">
                <Team></Team>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/team/:idTeam">
                <TeamDetails></TeamDetails>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <h1>No such page found</h1>
              </Route>
            </Switch>
    </Router>
    </div>
  );
}

export default App;
