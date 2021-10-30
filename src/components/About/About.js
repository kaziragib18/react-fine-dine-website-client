import React from 'react';

const About = () => {
      return (
            <div className="container">
                  <div className="about__section">
                        <div className="row">
                              <div className="col-md-6">
                                    <div className="about__image">
                                          <img className="w-100 pt-5 mt-3 rounded" src="https://powerhousegym.com/wp-content/themes/basic-hunchfree/img/social-img.png" alt="" />
                                    </div>
                              </div>
                              <div className="col-md-6">
                                    <div className="about__right__section text-start p-4 text-light">
                                          <h3 className="mt-4">About Us</h3>
                                          <hr className="text-light"/>
                                          <h1 className="text-light mt-3">Become a Powerhouse</h1>
                                          <p className="text-danger">
                                                We are particular about our licensees because they are responsible for our success-one Powerhouse Gym at a time. Powerhouse Gyms International only accepts top quality entrepreneurs who are committed to creating a premier fitness facility that benefits their community first, and themselves second. Those who meet our requirements are eligible for a license, which can provide many years of success.
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <h1 className="mt-4 fw-bold text-light">Connect</h1>
                              <h3 className="text-light">We’ve got the A to all of your Qs</h3>
                              <hr className="text-light" />
                              <div className="col-md-6">
                                    <div className="about__right__section text-start p-4 text-light">
                                          <h1 className="text-light mt-3">Impacting People’s Lives</h1>
                                          <p className="text-danger">
                                          The connection shared between coach and member is what makes us special! We believe coaching reaches far beyond the purple turf and we’re committed to standing beside you as you navigate your health journey. We know it can be challenging at times, but if you have questions about fitness, nutrition or recovery—we’ve got the answers. That’s our promise to you. From celebrating our members’ success to providing you with helpful resources, our team will support and inspire you along the way.
                                          </p>
                                    </div>
                              </div>
                              <div className="col-md-6">
                                    <div className="about__image">
                                          <img className="w-100 pt-5 rounded" src="https://images.unsplash.com/photo-1617634188234-a449146e911e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="" />
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default About;