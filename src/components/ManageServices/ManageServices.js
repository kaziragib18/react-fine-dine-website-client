import React, { useEffect, useState } from 'react';

const ManageServices = () => {
      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch('https://ghoulish-dracula-04901.herokuapp.com/services')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, []);

      const handleDelete = id => {
            const url = `https://ghoulish-dracula-04901.herokuapp.com/services/${id}`;
            fetch(url, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        // const confirmBtn = confirm("Are you sure?"); 
                        if (id) {
                              alert('Service Order Deleted!');
                              
                              const remaining = services.filter(service => service._id !== id);
                              setServices(remaining);
                              
                        }
                        
                  })
      }

      return (
            <div className="d-flex justify-content-center flex-column justify-content-center ">
                  <h2 className="text-info p-3">Manage Catering Services</h2>
                  {
                        services.map(service => <div className=" text-light p-4 border m-2"
                              key={service._id}>
                              <h5>{service.name}</h5>
                              <h5>{service.description}</h5>
                              <button onClick={() =>handleDelete(service._id)} className="btn btn-danger">Delete</button>
                        </div>)
                  }
            </div>
      );
};

export default ManageServices;