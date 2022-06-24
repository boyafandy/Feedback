import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Projects</h1>
        <p>This is react app to leave feedback for a product or service</p>
        <p>Versions: 1.0.0</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
