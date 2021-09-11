import './App.css';
import Blog from './blog';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './home';
import Project from './project';


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
            <Link to="/project" class="nav-link nav-color">Projects</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/blog' component={Blog}></Route>
          <Route exact path='/project' component={Project}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
