import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import ProjectDetails from './projectDetails';

class Project extends React.Component { 

  constructor() {
    super();

    this.state = {
      obj: [
        { 'id': 1,
          'name': 'CLI App',
          'git-link': 'https://github.com/ritu9898/CLI-quiz/tree/master',
          'live-link': 'https://replit.com/@Ritukapadia/CLI-quiz-3#index.js'},
        { 'id': 2,
          'name': 'Marvel or DC Quiz',
          'git-link': 'https://github.com/ritu9898/Marvel-DC-CLI-quiz/tree/master',
          'live-link': 'https://replit.com/@Ritukapadia/Marvel-DC-CLI-quiz#index.js'},
        { 'id': 3,
          'name': 'Banana Translate App',
          'git-link': 'https://github.com/ritu9898/convert-to-banana-language/tree/master',
          'live-link': 'https://xenodochial-rosalind-52c513.netlify.app/'},
        { 'id': 4,
          'name': 'Fun Translate App',
          'git-link': 'https://github.com/ritu9898/Fun-translate-api/tree/master',
          'live-link': 'https://competent-joliot-15752b.netlify.app/'},
        { 'id': 5,
          'name': 'Emoji Interpreter',
          'git-link': 'https://github.com/ritu9898/emoji-interpreter/tree/master',
          'live-link': 'https://jovial-sinoussi-563225.netlify.app/'}, 
        { 'id': 6,
          'name': 'Book Recommendation',
          'git-link': 'https://github.com/ritu9898/book-suggest/tree/master',
          'live-link': 'https://youthful-hugle-0258cc.netlify.app/'},  
        { 'id': 7,
          'name': 'Lucky Birthday',
          'git-link': 'https://github.com/ritu9898/lucky-birthday/tree/master',
          'live-link': 'https://optimistic-bhabha-318eb9.netlify.app/'},
        { 'id': 8,
          'name': 'Stock Calc',
          'git-link': 'https://github.com/ritu9898/stock-calc/tree/master',
          'live-link': 'https://condescending-rosalind-cd0110.netlify.app/'},
        { 'id': 9,
          'name': 'Cash Register Management',
          'git-link': 'https://github.com/ritu9898/cash-register/tree/master',
          'live-link': 'https://nifty-bhabha-99d277.netlify.app/'},
        { 'id': 10,
          'name': 'Pallindrome Birthday',
          'git-link': 'https://github.com/ritu9898/pallindrom-bday/tree/master',
          'live-link': 'https://keen-galileo-8dc473.netlify.app/'},
        { 'id': 11,
          'name': 'Fun Triangles',
          'git-link': 'https://github.com/ritu9898/fun-triangles/tree/master',
          'live-link': 'https://practical-neumann-193628.netlify.app/'}
      ]
    }
  }

  render() {
    let menuItems = [];
    for (var i = 0; i < this.state.obj.length; i++) {
        menuItems.push(<div className="card"><div className="card-body"><h5 className="card-title">Project {i+1}</h5><h6 className="card-subtitle mb-2 text-muted">{this.state.obj[i].name}</h6><p className=""></p><button className="btn btn-primary"><a href={this.state.obj[i]['git-link']}>GIT Link</a></button><button className="btn btn-primary"><a href={this.state.obj[i]['live-link']} className="" target="_blank">Live Demo</a></button></div></div>)
    }

    return(
        <div className="projects">
          {menuItems}
        </div>
    );
  }
}

export default Project;
