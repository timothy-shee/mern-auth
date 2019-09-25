import React, { Component } from "react";
import { Link } from "react-router-dom";
import cat from '../../images/kitten.jpg';
import Slider from "react-slick";

class Widowmaker extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: '40px',
    };
    return (
      <div style={{ height: "75vh" }} className="container">
        <h4>Most Popular: </h4>
        <Slider {...settings}>
          <div class="col s4">
            <div class="card circle">
              <div class="card-image">
                <img src={cat}/>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src={cat} />
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
              <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src={cat} />
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src={cat} />
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                <span class="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Widowmaker;
