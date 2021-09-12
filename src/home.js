import logo from './logo.svg';
import './App.css';
import bg from './images/bg-img.jpg';
import left from './images/left-home.jpg';

function Home() {
  return (
    <div>
      <div>
      <img src={bg} className="bg-img" alt="logo" />
      </div>
      <section className="container">
        <div className="row">
          <div class="col-md-6">
            <img src={left} class="card-img-top side-images" alt="..." />
          </div>
          <div class="col-md-6 card" id="intro-card">
            <h5 class="card-title">Ritu Kapadia</h5>
            <p class="card-text">A software engineer, a dancer, and a once in a while blogger. Welcome to my website. Here you can read my blogs and also checkout what I made.
            Before that, some details about me...
            I completed my masters in 2020 from DA-IICT, Gandhinagar. Currently I am working @Bacancy Technology, Ahmedabad.</p>
          </div>
        </div>
    
      </section>
    </div>
    );
}

export default Home;
