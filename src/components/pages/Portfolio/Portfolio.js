import React from 'react';
import Photo from '../AboutMe/JasonFlorence.jpg';
import cinema from './cinema.jpg';
import crypto from './crypto.jpg';
import network from './network.jpg';
import text from './text.jpg';
// import network from './network.jpg';
// import network from './network.jpg';

export default function Portfolio() {
  return (
    <div className="Portfolio container-fluid">
      <div className="row text-center justify-content-around m-2">
        <h2 className="m-3">My Projects</h2>

        <div className="col-4 mb-3">
          <div className="card rounded shadow">
            <a href="https://tranquil-garden-33513.herokuapp.com/" target="_blank">
              <img src={text} className="card-img-top" alt="Writing" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Text Me Later</h5>
              <p className="card-text">This app is a single-page application that meets PWA criteria. When used, it allows clients to type code on their browser and it is saved and reloaded upon refresh. The name "Text Me Later" is inspired by the fact that it is available to be installed and used offline!</p>
              <a href="https://github.com/jaolsen7/text-me-later" target="_blank">Text Me Later GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="col-4 mb-3">
          <div className="card rounded shadow">
            <a href="https://flix-factory.herokuapp.com/" target="_blank">
              <img src={cinema} className="card-img-top" alt="FlixFactory" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Flix Factory</h5>
              <p className="card-text">This group project is a TV show blogging platform where logged-in users can create posts and filter search by network. It utilizes mySQL/Sequelize, Models/Views/Controllers, and Handlebars. My contribution was the home page/routes/handlebars, which includes using query to filter by network.</p>
              <a href="https://github.com/kreativekntrl/Flix-Factory" target="_blank">Flix Factory GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div className="card rounded shadow">
            <a href="" target="_blank">
              <img src={Photo} className="card-img-top" alt="JasonFlorence" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Final Project</h5>
              <p className="card-text">TODO: Enter info...</p>
              <a href="" target="_blank">Final Project GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div className="card rounded shadow">
            <a href="" target="_blank">
              <img src={Photo} className="card-img-top" alt="JasonFlorence" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Last HW</h5>
              <p className="card-text">TODO: Enter info...</p>
              <a href="" target="_blank">Last HW GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div className="card rounded shadow">
            <a href="https://watch.screencastify.com/v/fLOuZSCG7s6mAqMeY2Gc" target="_blank">
              <img src={network} className="card-img-top" alt="SocialNetwork" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Mongoosified Network API</h5>
              <p className="card-text">This entirely back-end JavaScript/Node/Mongoose app models a social network API, where users can create thoughts and make friends and thoughts can be commented on with a "reaction". It required making models/schemas, routes, and controllers.</p>
              <a href="https://github.com/jaolsen7/mongoosified-network-api" target="_blank">Mongoosified Network API GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-4 mb-3">
          <div className="card rounded shadow">
            <a href="https://tyleroliveira.github.io/crypto-tracker/" target="_blank">
              <img src={crypto} className="card-img-top" alt="CryptoTracker" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Crypto Tracker</h5>
              <p className="card-text">Allows users to search for any cryptocurrency and page will display a card with information from CoinGecko and NYTimes APIs. A group project, where I contributed mostly to backend: setup CoinGecko, converted CSS to JS, favorite button functionality.</p>
              <a href="https://github.com/tyleroliveira/crypto-tracker" target="_blank">Crypto Tracker GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
