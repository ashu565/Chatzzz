import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
