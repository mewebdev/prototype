import { MemoryRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Space from '../components/Space';
import Design from '../components/Design';
import Notes from '../components/Notes';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Redirect to="/notes" />
        </Route>
      </Switch>
      <Switch>
        <Route path="/space">
          <Space space="2"/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/design">
          <Design space="1"/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/notes">
          <Notes space="3"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
