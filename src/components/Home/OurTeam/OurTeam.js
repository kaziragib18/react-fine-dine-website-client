import React from 'react';
import './OurTeam.css'

const OurTeam = ({team}) => {
      const { name, img, specialization } = team;
  
      return (
            <div className="mb-3 col-lg-3 col-sm-6 col-12">
                  <div className="border border-dark rounded w-100 bg-light">
                        <img className="w-100" src={img} alt="" />
                        <h4 className="text-dark pt-3 fs-5 fw-bold" >{name}</h4>
                        <h5 className="text-danger fs-6 fw-bold mb-3">{specialization}</h5>
                  </div>
            </div>
      );
};

export default OurTeam;