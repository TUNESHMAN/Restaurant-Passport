import React from "react";
import NavBar from "../components/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <section className="abt-sec1">
        <div className="abt-div1">
          <h2 className="abt-head">The Restaurant Passport Story</h2>
          <p className="abt-para">
            Our mission is to help you discover where the best meals are made.
            Your stomach doesn't have to guggle......
          </p>
        </div>
      </section>
      <section className="abt-sec2">
        <div className="abt-div2">
          <p className="abt-para2">
            Whether you're in the mood for something romantic, a rare free
            night, girls night out, or bachelor party, you can find it all here
            in one place. Stamp where you've been. Save your favorite
            restaurants. Make personalized lists of places you'd like to visit.
            Invite your friends and show off your passport.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
