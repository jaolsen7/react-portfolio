import React from 'react';
import bootcampResume from './Olsen-Coding-Resume-4-5-22.pdf';

export default function Resume() {
  return (
    <div className="Resume container-fluid">
      <div className="row justify-content-center m-2">
          <h4  className="col-12 text-center p-3">
          <a href={bootcampResume} download>(Download my Resume)</a>
          </h4>
        <div className="col-6 p-3 border border-dark">
          <h2 className="text-center text-decoration-underline">Professional Brand Statement</h2>
          <p>Web developer with a Certificate in Full Stack Web Development from UC San Diego Extension, where I acquired knowledge and skills in full-stack web technologies such as, but not limited to: mobile-responsive HTML/CSS/JavaScript, Node.js, Express.js, MySQL and React.js. As a previous high school science teacher, I have high initiative and can always be trusted to get the job done. I am an effective communicator/collaborator with all, yet am also autonomous and independent. I am an organized and methodical problem-solver, as I have a background in neurobiological research, and I am passionate about having a positive impact on the lives of others. All in all, my educational and professional background, combined with my positive attitude and grit, would make me a smart addition to any team or organization.</p>
        </div>
      </div>
    </div>
  );
}
