import React, { Component } from "react";
import { Link } from "react-router-dom";
import cat from '../../images/kitten.jpg';
import Slider from "react-slick";
import Widowmaker from './Widowmaker';
import Tracer from "./Tracer";

class Landing extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
    };
    return (
      <div className="container" class="">
        <Tracer />
        <ul id="slide-out" class="sidenav">
          <li>
            <div class="user-view">
              <div class="background">
                <img src="images/office.jpg" />
              </div>
            <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
            </div>
          </li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                
        <div style={{ height: "75vh" }} className="container">
          <h4>Trending: </h4>
          <Slider {...settings}>
            <div class="col s4">
              <div class="card circle">
                <div class="card-image">
                  <img src={cat} class="circle" />
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <span class="card-title">Card Title</span>
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
                </div>
              </div>
            </div>
          </Slider>
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Build</b> a login/auth app with the{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                scratch
              </h4>
              <p className="flow-text grey-text text-darken-1">
                Create a (minimal) full-stack app with user authentication via
                passport and JWTs
              </p>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Widowmaker />
      </div>
    );
  }
}

export default Landing;
