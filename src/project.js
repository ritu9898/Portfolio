import './App.css';
import React from 'react';

class Project extends React.Component { 
  

  constructor() {
    super();

    this.state = {
      obj: [
        {'name': 'CLI App',
          'git-link': 'https://github.com/ritu9898/CLI-quiz/tree/master',
          'live-link': 'https://replit.com/@Ritukapadia/CLI-quiz#'},
        {'name': 'Marvel or DC Quiz',
          'git-link': 'https://github.com/ritu9898/Marvel-DC-CLI-quiz/tree/master',
          'live-link': 'https://replit.com/@Ritukapadia/Marvel-DC-CLI-quiz#'},
        {'name': 'Banana Translate App',
          'git-link': 'https://github.com/ritu9898/convert-to-banana-language/tree/master',
          'live-link': 'https://practical-lichterman-220ac5.netlify.app/'},
        {'name': 'Fun Translate App',
          'git-link': 'https://github.com/ritu9898/Fun-translate-api/tree/master',
          'live-link': 'https://distracted-mccarthy-60b999.netlify.app/'},
        {'name': 'Emoji Interpreter',
          'git-link': 'https://github.com/ritu9898/emoji-interpreter/tree/master',
          'live-link': 'https://emoji-interpreter.ritukapadia.repl.co'}, 
        {'name': 'Book Recommendation',
          'git-link': 'https://github.com/ritu9898/book-suggest/tree/master',
          'live-link': 'https://book-suggest.ritukapadia.repl.co'},  
        {'name': 'Lucky Birthday',
          'git-link': 'https://github.com/ritu9898/lucky-birthday/tree/master',
          'live-link': 'https://lucky-birthday.ritukapadia.repl.co'},
        {'name': 'Stock Calc',
          'git-link': 'https://github.com/ritu9898/stock-calc/tree/master',
          'live-link': 'https://stock-calc.ritukapadia.repl.co'},
      ]
    }
  }

  render() {

    let menuItems = [];
    for (var i = 0; i < this.state.obj.length; i++) {
        menuItems.push(<div class="card"><div class="card-body"><h5 class="card-title">Project {i}</h5><h6 class="card-subtitle mb-2 text-muted">{this.state.obj[i].name}</h6><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href={this.state.obj[i]['git-link']}>GIT Link</a><a href={this.state.obj[i]['live-link']} class="card-link">Live Demo</a></div></div>)
    }

    return(
      <div className="projects">
        {menuItems}
      </div>
    );
  }
}

export default Project;
