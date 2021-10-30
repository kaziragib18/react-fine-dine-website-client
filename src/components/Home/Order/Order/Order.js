import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';


const Order = () => {
      const { id } = useParams();
      const [service, setService] = useState([]);

      console.log(id);

      useEffect(() => {
            fetch(`http://localhost:5000/services/${id}`)
                  .then(res => res.json())
                  .then(data => setService(data))

      }, [])

      return (
            <div>
                  <h2 className="text-info p-3">Detail: {service.name}</h2>
                  <h2 className="text-info p-3"> {service.description}</h2>
            <h2 className="text-white p-3">Id: {id}</h2>
      </div>
      );
};

export default Order;