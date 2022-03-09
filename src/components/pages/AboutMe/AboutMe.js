import React from 'react';
import Photo from './JasonFlorence.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="AboutMe container-fluid">
      <div className="row text-center m-2">
        <h2>About Me</h2>
        <div className="col-sm-3">
          <img src={Photo} className="rounded img-thumbnail shadow" alt="JasonFlorence" />
        </div>
        <div className="col-sm-9">
          <p>
          After completing a neurobiology degree at UC Berkeley, I jumped into a Master's of Education
          program at UCSD because I really wanted to share my love of learning while also making an impact.
          However, once in the classroom, I soon realized that being a high school teacher is not fit for me.
          I was teaching 4 different grade levels and 3 different subjects in 2 different languages.
          This made for 1 very stressed out teacher and I quickly grew tired of the persona I had to put on each day.
          </p>
          <p>
          Luckily, friends and even strangers suggested I look into software/web development and I'm so glad that I did!
          I signed up for the UCSD Extension Coding Bootcamp and am in love with coding already. :)
          Not only does it involve learning everyday, problem-solving, and expressing my creativity, but it also
          honestly challenges me, which makes it fun to do and exciting to think about its potential!
          All in all, I'm just really determined to learn more, work hard, and find out how I can make the world better through software!
          </p>
        </div>
      </div>
    </div>
  );
}
