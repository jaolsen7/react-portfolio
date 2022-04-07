import React from 'react';
import plant from './plant.jpg';
import cinema from './cinema.jpg';
import crypto from './crypto.jpg';
import network from './network.jpg';
import text from './text.jpg';
import { Button } from "react-bootstrap";

const styles = {
  shadow: {
    boxShadow: "0px 0px 40px white",
  },
};
export default function Portfolio() {
  return (
    <div className="Portfolio container-fluid">
      <div className="row text-center justify-content-center m-3">
        <h2 className="col-12 m-3">My Projects</h2>

        <div className="col-3 p-2 m-3 bg-transparent rounded">
          <div className="bg-transparent" style={styles.shadow}>
            <a href="https://stark-brushlands-04635.herokuapp.com/" target="_blank">
              <img src={plant} className="card-img-top" alt="Job Board" />
            </a>
            <div className="card-body">
            <h5 className="card-title">Plant Swap Lite</h5>
            <p className="card-text">Users can post and search Plants by zip code/username. If logged in, Plants can be commented on and traded. (Currently working on this project)</p>
            <hr />
            <p className="my-0 text-center">Full-Stack MERN | Mongoose | Express</p>
            <p className="my-0 text-center">React | Node | ApolloGraphQL</p>
            <p className="mt-0 text-center">JWT Auth | React Bootstrap</p>
            <Button
              variant="light"
              className="d-block mb-2"
              href="https://stark-brushlands-04635.herokuapp.com/"
              target="_blank"
            >Click for "Plant-Swap-Lite"</Button>
            <Button
              variant="outline-dark"
              className="d-block"
              href="https://github.com/jaolsen7/plant-swap"
              target="_blank"
            >Click for Github Repo</Button>
            </div>
          </div>
        </div>

        <div className="col-3 p-2 m-3 bg-transparent rounded">
          <div className="bg-transparent" style={styles.shadow}>
            <a href="https://tranquil-garden-33513.herokuapp.com/" target="_blank">
              <img src={text} className="card-img-top" alt="writing" />
            </a>
            <div className="card-body">
            <h5 className="card-title">Text Me Later</h5>
            <p className="card-text">A single-page application that meets PWA criteria. Allows clients to type code on their browser and it is saved and reloaded upon refresh. Installable!</p>
            <hr />
            <p className="my-0 text-center">JavaScript | NodeJS | Express</p>
            <p className="my-0 text-center">IDB | Webpack | Babel</p>
            <p className="mt-0 text-center">Workbox | Code Mirror</p>
            <Button
              variant="light"
              className="d-block mb-2"
              href="https://tranquil-garden-33513.herokuapp.com/"
              target="_blank"
            >Click for "Text-Me-Later"</Button>
            <Button
              variant="outline-dark"
              className="d-block"
              href="https://github.com/jaolsen7/text-me-later"
              target="_blank"
            >Click for Github Repo</Button>
            </div>
          </div>
        </div>

        <div className="col-3 p-2 m-3 bg-transparent rounded">
          <div className="bg-transparent" style={styles.shadow}>
            <a href="https://flix-factory.herokuapp.com/" target="_blank">
              <img src={cinema} className="card-img-top" alt="writing" />
            </a>
            <div className="card-body">
            <h5 className="card-title">Flix Factory</h5>
            <p className="card-text">A blogging platform where logged-in users can create posts and filter/search by TV network. Organized as Models/Views/Controllers.</p>
            <hr />
            <p className="my-0 text-center">JavaScript | NodeJS | Express</p>
            <p className="my-0 text-center">mySQL | Sequelize | BCrypt</p>
            <p className="mt-0 text-center">Axios | Handlebars</p>
            <Button
              variant="light"
              className="d-block mb-2 mt-4"
              href="https://flix-factory.herokuapp.com/"
              target="_blank"
            >Click for "Flix-Factory"</Button>
            <Button
              variant="outline-dark"
              className="d-block"
              href="https://github.com/jaolsen7/Flix-Factory"
              target="_blank"
            >Click for Github Repo</Button>
            </div>
          </div>
        </div>

        <div className="col-3 p-2 m-3 bg-transparent rounded">
          <div className="bg-transparent" style={styles.shadow}>
            <a href="https://watch.screencastify.com/v/fLOuZSCG7s6mAqMeY2Gc" target="_blank">
              <img src={network} className="card-img-top" alt="writing" />
            </a>
            <div className="card-body">
            <h5 className="card-title">Mongoosified Network API</h5>
            <p className="card-text">This entirely back-end app models a social network API, where Users create Thoughts and make Friends. Thoughts can be commented on with a "reaction".</p>
            <hr />
            <p className="my-0 text-center">JavaScript | NodeJS | Express</p>
            <p className="my-0 text-center">noSQL | MongoDB | Mongoose</p>
            <p className="mt-0 text-center">DayJS | Insomnia</p>
            <Button
              variant="light"
              className="d-block mb-2"
              href="https://watch.screencastify.com/v/fLOuZSCG7s6mAqMeY2Gc"
              target="_blank"
            >Click for "Mongoosified-Network"</Button>
            <Button
              variant="outline-dark"
              className="d-block"
              href="https://github.com/jaolsen7/mongoosified-network-api"
              target="_blank"
            >Click for Github Repo</Button>
            </div>
          </div>
        </div>

        <div className="col-3 p-2 m-3 bg-transparent rounded">
          <div className="bg-transparent" style={styles.shadow}>
            <a href="https://tyleroliveira.github.io/crypto-tracker/" target="_blank">
              <img src={crypto} className="card-img-top" alt="writing" />
            </a>
            <div className="card-body">
            <h5 className="card-title">Crypto Tracker</h5>
            <p className="card-text">Allows users to search for a cryptocurrency and retrieve data from CoinGecko/NYTimes.</p>
            <hr />
            <p className="my-0 text-center">HTML | CSS | W3/Bootstrap</p>
            <p className="my-0 text-center">JavaScript | fetch API | Git</p>
            <Button
              variant="light"
              className="d-block my-2"
              href="https://tyleroliveira.github.io/crypto-tracker/"
              target="_blank"
            >Click for "Crypto-Tracker"</Button>
            <Button
              variant="outline-dark"
              className="d-block"
              href="https://github.com/jaolsen7/crypto-tracker"
              target="_blank"
            >Click for Github Repo</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
