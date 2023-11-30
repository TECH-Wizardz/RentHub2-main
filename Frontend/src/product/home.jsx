import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./home.css";

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home-middle-container">
          <p className="top-paragraph">
            Elevate your construction game <br/> with top-quality equipment rentals!
          </p>
          <div className="row">
            <div className="input-field col s12">
              <button type="submit" className="renthub-btn">
                <Link to="/productList" className="nav-links ">
                  <i className="fas fa-home" />
                  Browse all machines
                </Link>
              </button>
              <button type="submit" className="renthub-btn">
                <Link to="/productList" className="nav-links ">
                  <i className="fas fa-home" />
                  Rent with rent hub
                </Link>
              </button>
            </div>
          </div>
          
        </div>
        <div className="row">
        <div className="input-field col s12">
            <p className="sub-heading">The Rent hub Experience</p>
            </div>
            <div className="input-field col s12">
            <p className="bottom-paragraph">Construction equipment rentals offer a cost-effective and convenient solution for any <br/>
                project. Rather than purchasing expensive tools and machinery, you can easily rent <br/>
                the equipment you need for the duration of your project. This saves you money on <br/>
                upfront costs and maintenance fees. Plus, with a wide variety of equipment available, <br/>
                you'll have access to the latest and most advanced tools in the industry. Construction <br/>
                equipment rentals make it easy to get the job done efficiently and effectively.</p>
           </div>
          </div>
      </div>
    );
  }
}
