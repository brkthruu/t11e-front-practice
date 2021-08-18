import { Link, Route } from 'react-router-dom';
import './App.css';
import LoginCallback from './LoginCallback';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <div>
      <Route component={LoginPage} path="/" />
      <Route component={LoginCallback} path="/logincb" />
    </div>
  );
}

export default App;
