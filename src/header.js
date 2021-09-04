import './App.css';
import Blog from './blog';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './home';


function Header() {
  return (
    <Router>
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link to="/" class="nav-link nav-color">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/blog" class="nav-link nav-color">Blog</Link>
          </li>
          <li class="nav-item">
            <Link to="/projects" class="nav-link nav-color">Projects</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-color disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/blog' component={Blog}></Route>
          <Route exact path='/blog' component={Blog}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
