import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

// Views
import Nav from './components/Layout/navbar'
import Home from './components/Home'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          {/* Públic Routes */}
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
