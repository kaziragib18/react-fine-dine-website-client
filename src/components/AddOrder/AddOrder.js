import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './AddOrder.css'


const AddOrder = () => {
      const {id} = useParams();
      const { user } = useAuth();
      const [service, setService] = useState([]);

      useEffect(() => {
            fetch(`https://ghoulish-dracula-04901.herokuapp.com/services/${id}`)
                  .then(res => res.json())
                  .then(data => setService(data))

      }, [])
      // console.log(id);
      const { register, handleSubmit, reset } = useForm();
      let history = useHistory();
      const onSubmit = data => {
            console.log(data);
            axios.post('https://ghoulish-dracula-04901.herokuapp.com/orders', data)
            .then(res => {
                  console.log(res);
                  if(res.data.insertedId){
                        alert('Successfully Added');
                        history.push("/myOrder");
                        reset();
                  }
            })
      }
      
      return (
            <div className="add__order">
            <h2 className="text-danger p-1 mt-4">For Ordering Please Fill up the Form<hr className="text-light"/></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <input  type="text" {...register("name", { maxLength: 50 })} value={user.displayName}/>
                  <input type="email" {...register("email", { maxLength: 50 })} value={user.email}/>
                  <input {...register("phone")} placeholder="Phone Number" required/>
                  <input type="date" {...register("date")} placeholder="Set your order date" required/>
                  <textarea {...register("address")} placeholder="Enter your address" required/>
                  <textarea {...register("description")} value={service.name} required/>
                  <button className="btn btn-primary py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
            </form>
      </div>
      );
};

export default AddOrder;