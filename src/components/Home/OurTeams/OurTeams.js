import React from 'react';
import { Carousel } from 'react-bootstrap';
import expert1 from '../../../images/teams/expert1.jpg'
import expert2 from '../../../images/teams/expert2.jpg'
import expert3 from '../../../images/teams/expert3.jpg'
import expert4 from '../../../images/teams/expert4.jpg'
import OurTeam from '../OurTeam/OurTeam';

const teams = [
      {
            img: expert1,
            name: 'Mike Jordon',
            specialization: 'Head Chef'
      },
      {
            img: expert2,
            name: 'Rina Williums',
            specialization: 'Sous Chef'
      },
      {
            img: expert3,
            name: 'Amily Ray',
            specialization: 'Event Organizer'
      },
      {
            img: expert4,
            name: 'Adam Fuller',
            specialization: 'Delivary Expert'
      },
]
const OurTeams = () => {
      return (
            <div id="ourteam" className="container">
                  <h2 className="text-danger mt-4 mb-3">Our Expert Team</h2>
                  <h5 className="text-light"> We are a team of professional caterers serving the catering needs of weddings, corporate, outdoor, small parties, and more. We understand well that the type of event will determine the type of services you need. Our catering solutions are tailored and designed to meet what you are looking for and what to create to inspire an exciting catering experience.</h5>
                  <hr className="text-light" />
                  <div className="row">
                        {
                              teams.map(team => <OurTeam
                                    key={team.name}
                                    team={team}></OurTeam>)
                        }

                  </div>

                  <hr className="text-light"/>
                  <div id="about" className="container">
                  <div className="about__section">
                        <div className="row">
                              <div className="col-md-6">
                                    <div className="about__image">
                                          <img className="w-100 pt-5 mt-3 rounded" src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0ZXJpbmclMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                                    </div>
                              </div>
                              <div className="col-md-6">
                                    <div className="about__right__section text-start p-4 text-light">
                                          <h3 className="text-light mt-5">About Us</h3>
                                          <hr className="text-light"/>
                                          <h4 className="text-danger mt-3">A Perfect Blend Of Sensational Food & Inspiring Ideas</h4>
                                          <p className="text-light">
                                          “Fine Dine” is very committed in maintaining the highest level of professionalism through integrity, public relations; interpersonal skills comprehensive bouquet of food & beverages, complimented with best service practices in the service industry.The objective of our business is to always provide a wide spread of innovative culinary dishes and to create and promote healthy eating practices from time to time.
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="row">
                              <hr className="text-light mt-2" />
                              <div className="col-md-6">
                                    <div className="about__right__section text-start p-4 text-light">
                                          <h3 className="text-light mt-3">Our Mission</h3>
                                          <hr className="text-light"/>
                                          <h4 className="text-danger mt-3">Serve Exotic Recipes To Our Clients In The Most Comprehensive Way</h4>
                                          <p className="text-light">
                                          To cater to your members, guests, and associates as a valued destination of choice, bringing people together to have fun as a part of the balanced and healthy lifestyle. Our friendly, dedicated, and professional team will passionately provide a high-quality dining environment to create a memorable experience.Our specialized external trainer accomplishes the training task for our employees from time to time. We continue the educational training process by providing classroom sessions and on-site training to evaluate our set service standards.
                                          </p>
                                    </div>
                              </div>
                              <div className="col-md-6">
                                    <div className="about__image">
                                          <img className="w-100 pt-5 rounded" src="https://images.unsplash.com/photo-1628578569073-8ee77295315d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdGVyaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>

                  {/* <h2 className="text-danger mt-4 mb-3">Training & Supervision</h2>
                  <h5 className="text-light">Our instrauctors have  comprehensive knowledge of how to use all the equipment in gym safely and effectively. This will help them advise members on correct procedures and stop any unsafe practices. Our instructors always on hand to monitor the gym floor and advise members on the use of equipment to reduce the chance of injury.</h5>
                  <hr className="text-light" /> */}

                  {/* <Carousel id="training" className="pt-1">
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/07/lifting_equipment_gym-7.jpg"
                                    alt="First slide"
                              />
                              <Carousel.Caption>
                                    <h3 className="text-light fs-5 fw-bold bg-dark p-2 rounded-pill">Always Monitoring For Safety</h3>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/02/Gym-Injury-1.png"
                                    alt="Second slide"
                              />

                              <Carousel.Caption>
                                    <h3 className="text-dark fs-5 fw-bold bg-light p-2 rounded-pill">Trained Medical Instructors</h3>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/02/Gym-Induction.jpg"
                                    alt="Third slide"
                              />

                              <Carousel.Caption>
                                    <h3 className="text-dark fs-5 fw-bold bg-light p-1 rounded-pill">Continuous Guidance Anytime</h3>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel> */}
            </div>
      );

};

export default OurTeams;