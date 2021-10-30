import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/services')
                  .then(res => res.json())
                  .then(data => setServices(data));
      }, [])

      return (
            <div id="services" className="p-3">
                  <h2 className="text-danger mt-5"> Order Catering Services</h2>
                  <p className="text-light">Fine Dine offers a wide variety of catering services with amazing food to fit both your event and your budget. Our full catering services handle all aspects of events such as preparation, creation, delivery, and presentation of food.</p>
                  <hr className="text-light" />
                  <div className="service__div">
                        <div className="service__container">
                              {
                                    services.map(service => <Service
                                          key={service.id}
                                          service={service}>

                                    </Service>)
                              }

                        </div>
                  </div>
            </div>
      );
};

export default Services;