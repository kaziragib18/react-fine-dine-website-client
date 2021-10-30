import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
      const { _id, name, img, description } = service;
      return (
            <div className="service__card pb-3">
                  <img className="service__img" src={img} alt="" />
                  <h4 className="pt-3  fs-5 fw-bold">{name}</h4>
                  <h5 className="p-2 fs-6">{description}</h5>
                  <Link to={`/addOrder/${_id}`}>
                  <button className="btn btn-dark border rounded-pill px-4">Order</button>
                  </Link>
            </div>
      );
};

export default Service;