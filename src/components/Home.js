import React from 'react'
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/img3.webp";
import img42 from "../images/img4.2.webp";
import img43 from "../images/img4.3.jpg";
import img44 from "../images/img4.4.jpg";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-5 text-center">
        <div className="row align-items-center">
          <div className="col-lg-6 g-4 text-start">
            <h3>
              Elevate Your <span>Style</span> with Exquisite Necklaces and
              Pendants
            </h3>
            <p>
              Are you ready to adorn yourself with timeless elegance and
              undeniable charm? Luxe Lady Necklaces invites you to explore a
              world of exquisite necklaces and pendants that will captivate your
              senses and enhance your beauty. We're more than just an online
              jewelry store; we're your gateway to luxury, sophistication, and
              self-expression.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={img1} className="rounded" alt="Necklace" width={350} />
          </div>
        </div>

        <div className="mt-5">
          <h3>
            Discover the <span>Uniqueness</span> of Luxe Lady Necklaces
          </h3>
          <p className="fst-italic">
            Immerse yourself in our exclusive collection
          </p>
          <div className="row">
            <div className="col-lg-4">
              <img src={img42} className="rounded" alt="Necklace" width={350} />
            </div>
            <div className="col-lg-4">
              <img src={img43} className="rounded" alt="Necklace" width={350} />
            </div>
            <div className="col-lg-4">
              <img src={img44} className="rounded" alt="Necklace" width={350} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-start">
              <p>
                <p className="fw-bold">Timeless Classics:</p> From delicate
                chains to bold statement pieces, our necklaces and pendants
                cater to every style and occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;