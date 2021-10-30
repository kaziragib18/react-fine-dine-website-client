import React, { useState, useEffect } from 'react';

const ShowOrder = () => {
      const [orders, setOrders] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/orders')
                  .then(res => res.json())
                  .then(data => setOrders(data))
      }, []);
      const handleDelete = id => {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (id) {
                              alert('Your Order is Canceled!');
                              
                              const remaining = orders.filter(order => order._id !== id);
                              setOrders(remaining);
                              
                        }
                        
                  })
      }

      return (
            <div className="d-flex justify-content-center flex-column justify-content-center ">
                  <h2 className="text-info p-3">Your Orders:</h2>
                  {
                        orders.map(order => <div className=" text-light p-4 border m-2"
                              key={order._id}>
                              <h3>Name: {order.name}</h3>
                              <h3>Email: {order.email}</h3>
                              <h3>Phone Number: {order.phone}</h3>
                              <h3>Date of order: {order.date}</h3>
                              <h3>Address: {order.address}</h3>
                              {/* cancel order */}
                              <button onClick={() =>handleDelete(order._id)} className="btn btn-danger">Cancel</button>
                        </div>)
                  }
            </div>
      );
};

export default ShowOrder;