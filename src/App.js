import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { Route, Switch } from 'react-router';
import ChatRoom from './Pages/ChatRoom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/room/:id' component={ChatRoom} />
      </Switch>
    </div>
  );
}

export default App;
