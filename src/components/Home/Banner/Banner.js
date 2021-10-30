import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'

const Banner = () => {
      return (
            <>
                  <div>
                  <div className="banner d-flex  align-items-center ">
                        <div className="row container">
                              <div className="col-md-10">
                                    <h1 className="title">Perfect Blend Of Sensational Food.</h1>
                                    <h2 className="title-sm"> Our catering solutions are tailored and designed to meet what you are looking for and what to create to inspire an exciting catering experience.</h2>
                                    <Link to='/about'>
                                   
                                    </Link>
                                    <Nav.Link className="nav__design" as={HashLink} to="/home#about"> <button className="btn btn-danger rounded-pill m-3 py-3 px-4">About us</button></Nav.Link>
                              </div>
                              <div className="col-md-2"></div>
                        </div>
                  </div>
            </div>

            </>
      );
};

export default Banner;