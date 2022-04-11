import React from 'react';
import JasonFlorence from './JasonFlorence.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="AboutMe container-fluid">
      <div className="row align-items-center justify-content-center text-center mt-3 m-2">
        <div className="card bg-black col-sm-3 mb-3 mx-3 py-3 border-5 border-white">
          <img src={JasonFlorence} className="mx-auto my-auto rounded img-fluid img-thumbnail shadow" alt="JasonFlorence" />
        </div>
        <div className="card col-sm-6 mb-3 py-3 px-3 border-5 border-dark">
          <h2 >About Me</h2>
          <p className="card-text">
          I have always loved learning about the world, especially through the lens of science and math, which is why
          I completed a neurobiology degree at UC Berkeley. During these wonderful years, I worked as a research assistant
          in a lab that studied sleep and wake neural circuits. While I enjoyed research and am still passionate for the subject,
          I wanted to work in a more collaborative and compassionate setting, so I entered into the Master's of Education program at UCSD
          where I shared my love of learning while also making an impact on others. Although I completed the program, I soon realized
          that being a high school teacher is not fit for me. I love helping others learn and grow, but I didn't feel like myself on campus.
          In a way, it felt like I was acting and I didn't love the feeling that I wasn't 100% secure with my career choice.
          </p>
          <p className="card-text">
          Luckily, friends and even strangers suggested I look into software/web development and I'm so glad that I did!
          I completed the UCSD Extension Coding Bootcamp in March and am in love with coding already.
          Not only does it involve learning everyday, problem-solving, and expressing my creativity, but it also
          honestly challenges me. I look forward to coding each day and get excited when thinking about its potential!
          All in all, I'm just really determined to learn more, work hard, and find out how I can make the world better through software!
          </p>
          <h2>Skills/Tech Knowledge:</h2>
          <p className="card-text text-center"> HTML : CSS : JavaScript : MERN : Mongoose : Express : React : NodeJS <br/>
          Sequelize : MySQL : NoSQL : MongoDB : Insomnia : Git: Heroku : Apollo/GraphQL : Jest</p>
        </div>
      </div>
    </div>
  );
}
