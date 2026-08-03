import React from "react";
import "./aboutUs.css";
import bg from "../pics/aboutus-bg.png";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-header">
        <h2>About Us</h2>
      </div>
      <div className="AboutUs-Text">
        <p>
          Welcome to Aura Shop, a cozy little space created for those who
          believe that every home deserves a touch of warmth, wonder, and
          positive energy. What began as a passion for beautiful handcrafted
          décor has grown into a collection of carefully selected candles,
          dreamcatchers, and tarot cards designed to inspire peaceful moments
          and meaningful rituals.
        </p>
        <p>
          At Aura Shop, we believe that everyday objects can tell stories. Our
          scented candles are made to create comforting atmospheres, our
          dreamcatchers add a sense of serenity and artistic charm to any room,
          and our tarot decks invite curiosity, reflection, and self-discovery.
          Whether you're decorating your space, searching for a thoughtful gift,
          or exploring your spiritual side, you'll find pieces that are both
          beautiful and unique.
        </p>
        <p>
          Every product in our collection is chosen with quality, creativity,
          and authenticity in mind. We love combining modern aesthetics with
          timeless symbolism to offer items that feel personal and inspiring.
          Our mission is simple: to help you create spaces that feel peaceful,
          magical, and truly your own.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
