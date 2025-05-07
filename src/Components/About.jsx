/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";
// You'll need to import your computer image here
import computerImage from "../images/computer.jpg"; // Update this path to your actual computer image

const imageAltText = "purple and blue abstract background";
const computerAltText = "computer workstation"; // Update this to describe your computer image

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a web designer and software engineer to be currently studying at Kingston University in the UK. I am passionate about solving problems in new creative ways to drive innovation. I continually look for new and better ways to make tech accessible by all.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design and software engineering",
  "C#",
  "Python",
  "HTML & CSS",
  "JavaScript",
  "Wordpress",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-layout">
        <div className="computer-container">
          <img className="computer-image" src={computerImage} alt={computerAltText} />
        </div>
        <div className="content-container">
          <div className="content-card">
            <h2>About Myself</h2>
            <p className="large">{description}</p>
            <hr />
            <ul className="skills-list">
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <hr />
            <p className="quote">{detailOrQuote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
