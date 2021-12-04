import { React, useEffect } from "react";
import { useParams } from "react-router";

// class ProjectDetails extends React.Component {
//   render() {
  function ProjectDetails() {

    let count = 0;
    const { id } = useParams(); // here id is the :id that we define in Project route

    const data = {
      obj: [
        { 'id': 1,
          'name': 'CLI App',
          'git-link': 'https://github.com/ritu9898/CLI-quiz/tree/master',
          'live-link': 'https://replit.com/@Ritukapadia/CLI-quiz#'},
        { 'id': 2,
          'name': 'Marvel or DC Quiz',
          'git-link': 'https://github.com/ritu9898/Marvel-DC-CLI-quiz/tree/master',
          'live-link': 'https://replit.com/@Ritukapadia/Marvel-DC-CLI-quiz#'},
        { 'id': 3,
          'name': 'Banana Translate App',
          'git-link': 'https://github.com/ritu9898/convert-to-banana-language/tree/master',
          'live-link': 'https://practical-lichterman-220ac5.netlify.app/'},
        { 'id': 4,
          'name': 'Fun Translate App',
          'git-link': 'https://github.com/ritu9898/Fun-translate-api/tree/master',
          'live-link': 'https://distracted-mccarthy-60b999.netlify.app/'},
        { 'id': 5,
          'name': 'Emoji Interpreter',
          'git-link': 'https://github.com/ritu9898/emoji-interpreter/tree/master',
          'live-link': 'https://emoji-interpreter.ritukapadia.repl.co'}, 
        { 'id': 6,
          'name': 'Book Recommendation',
          'git-link': 'https://github.com/ritu9898/book-suggest/tree/master',
          'live-link': 'https://book-suggest.ritukapadia.repl.co'},  
        { 'id': 7,
          'name': 'Lucky Birthday',
          'git-link': 'https://github.com/ritu9898/lucky-birthday/tree/master',
          'live-link': 'https://lucky-birthday.ritukapadia.repl.co'},
        { 'id': 8,
          'name': 'Stock Calc',
          'git-link': 'https://github.com/ritu9898/stock-calc/tree/master',
          'live-link': 'https://stock-calc.ritukapadia.repl.co'},
        { 'id': 9,
          'name': 'Cash Register Management',
          'git-link': 'https://github.com/ritu9898/cash-register/tree/master',
          'live-link': 'https://quizzical-swirles-163c81.netlify.app/'},
        { 'id': 10,
          'name': 'Pallindrome Birthday',
          'git-link': 'https://github.com/ritu9898/pallindrom-bday/tree/master',
          'live-link': 'https://distracted-mcclintock-a161af.netlify.app/'},
        { 'id': 11,
          'name': 'Fun Triangles',
          'git-link': 'https://github.com/ritu9898/fun-triangles/tree/master',
          'live-link': 'https://fun-triangles.tiiny.site/'}
      ]
    }

    let url = data.obj[id-1]["live-link"];


    useEffect(() => {
      // fetch(url)
      // .then(response => 
      //   console.log(response);
      //   response.json())
      // .then(function(data){
      //   })
      // .catch(function(error){ 
      //   console.error();
      // });

      // window.location.href = url;
      // window.history.pushState(null, '', 'http://localhost:3000/project/'+id);    
    });

    return(
      <div>
        <h2>Hello - {id}</h2>
        <p>{data.obj[id-1]["live-link"]}</p>
        
      </div>
    );
  }
// }

export default ProjectDetails;