import './App.css';
import NavbarElement from './components/Navbar/NavbarElement';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import Passengers from './components/Passengers/Passengers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/passengers">
            <Passengers />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <NavbarElement />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
