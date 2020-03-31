import React from "react";
import Restaurant from "../images/Restaurant.jpg";
import Cheese from "../images/Cheese.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <section className="section1">
        <div className="description">
          <h2 className="lead">Restaurant Passport</h2>
          <p className="sub-text">Find a restaurant close to you</p>
          <p className="second-text">
            This is the best chore tracker app ever. It will allow you to find
            out how many household duties your child has performed! It has an
            awesome emoji-based score system as well as nice graphs.
          </p>
        </div>

        <div className="image">
          <img src={Restaurant} alt="restaurant" className="pics" />
        </div>
      </section>

      <section className="section2">
        <div className="narration">
          <p className="txt1">
            <span className="schedule">
              <strong>Restaurant Passport</strong>, you can easily locate a
              restaurant in your city
            </span>
            <img src={Cheese} className="emoji" alt="emoji" />
          </p>
          <p className="txt">
            Finding something to eat shouldn't be a hard thing. Restaurant
            Passport will make it easier for you to refill your tank and satisfy
            your guggling stomach.
          </p>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
