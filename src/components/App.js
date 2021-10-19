import { MemoryRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Space from '../components/Space';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Redirect to="/space" />
        </Route>
      </Switch>
      <Switch>
        <Route path="/space">
          <Space space="2"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
