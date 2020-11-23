import './App.css';
import InfoPage from './components/info_page';
import FormUrl from './components/form_url';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/application">Applications</Link>
              </li>
              <li>
                <Link to="/Form">AddJobs</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/application">
              <InfoPage />
            </Route>
            <Route path="/Form">
              <FormUrl />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
