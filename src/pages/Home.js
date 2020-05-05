import React from "react";
import Restaurant from "../images/Restaurant.jpg";
import Cheese from "../images/Cheese.png";
import NavBar from "../components/NavBar";
import google from "../images/google.svg";
import apple from "../images/apple.svg";
import world from "../images/world.jpg";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  const handleClick = () => {
    history.push(`/register`);
  };

  return (
    <React.Fragment>
      <NavBar />
      <section className="section1">
        <div className="description">
          <h2 className="lead">Restaurant Passport</h2>
          <p className="sub-text">Find a restaurant close to you</p>
          <p className="second-text">
            RestaurantPassport gives let's you know where the best meals are
            made in every city. Creat an account, login with your details, and
            explore today.
          </p>
          <form>
            <input
              type="email"
              placeholder="Ready to create a passport?"
              id="mail"
            />
            <button onClick={handleClick} id="submit">
              {" "}
              GET STARTED
            </button>
          </form>
          <div className="brand">
            <img className="google" src={google} alt="google" />
            <img className="google" src={apple} alt="apple" />
          </div>
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

      <section className="section2">
        <div className="narration">
          <p className="txt1">
            <span className="schedule1">
              <strong>Find new eats</strong>. Save your faves. Taste the City!
            </span>{" "}
          </p>
          <p className="txt">
            Whether you're in the mood for something romantic, a rare free
            night, girls night out, or bachelor party, you can find it all here
            in one place. Make personalized lists of places you'd like to visit.
            Invite your friends and show off your passport.
          </p>
        </div>
      </section>

      <section className="section5">
        <div className="narration2">
          <p className="global">
            Join our
            <span className="schedule">
              <strong> global community</strong>
            </span>
            and get access to a better way to
            <span className="schedule">
              <strong> monitor chores </strong>
            </span>
          </p>
        </div>
        <div>
          <img className="picture" src={world} alt="world" />
        </div>
      </section>
      <div>{/* <Footer /> */}</div>
    </React.Fragment>
  );
}

export default Home;
