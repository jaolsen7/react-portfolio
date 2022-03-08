import React from 'react';
import Photo from './JasonFlorence.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="AboutMe container-fluid">
      <div className="row text-center m-2">
        <h1>About Me</h1>
        <div className="col-sm-3">
          <img src={Photo} className="rounded img-thumbnail shadow" alt="JasonFlorence" />
        </div>
        <div className="col-sm-9">
          <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          </p>
        </div>
      </div>
    </div>
  );
}
