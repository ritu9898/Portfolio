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
import ProjectDetails from './projectDetails';
import Contact from './contact';


function Header() {
  return (
    <Router>
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link nav-color">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link nav-color">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-link nav-color">Projects</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/blog' component={Blog}></Route>
          <Route exact path='/project' component={Project}></Route>
          <Route exact path='/project/:id' component={ProjectDetails}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Header;
