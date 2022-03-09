import React from 'react';
import bootcampResume from './Olsen-Bootcamp-Resume.pdf';

export default function Resume() {
  return (
    <div className="Resume container-fluid">
      <div className="row justify-content-center m-2">
        <h2 className="text-center text-decoration-underline">Skills/Languages Included in Resume</h2>
        <a className="text-center" href={bootcampResume} download>(Download a copy)</a>
        <ul className="d-flex flex-column w-25 align-items-center m-3 border border-dark border-3">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript ES6+</li>
        <li>JQuery</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Express</li>
        <li>NodeJS</li>
        <li>Handlebars</li>
        <li>Inquirer</li>
        <li>Insomnia</li>
        <li>GraphQL</li>
        <li>Jest</li>
        <li>MERN</li>
      </ul>
      </div>
    </div>
  );
}
