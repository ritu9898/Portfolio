import React  from "react";
import axios from "axios";

class Contact extends React.Component {
  
  submitForm(e) {
    console.log(e);
    // let url = 'https://api.hsforms.com/submissions/v3/integration/submit/62515/fcc69886-915b-4fef-b35f-27850ef461e1';
    let userEmail = 'ritu@gmail.com';
  }
  
  render() {
    return(
      <div className="container">
        <form className="form-container">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary submit-contact-form" onClick={this.submitForm(this.bind)}>Submit</button>
        </form>
      </div>
    );
  }

}

export default Contact;