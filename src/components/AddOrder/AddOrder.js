import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddOrder.css'

const AddOrder = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('http://localhost:5000/orders', data)
            .then(res => {
                  console.log(res);
                  if(res.data.insertedId){
                        alert('Successfully Added');
                        reset();
                  }
            })
      }
      
      return (
            <div className="add__order">
            <h2 className="text-danger p-1 mt-4">For Ordering Please Fill up the Form<hr className="text-light"/></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required/>
                  <input  {...register("email", { required: true, maxLength: 20 })} placeholder="Email" required/>
                  <input {...register("phone")} placeholder="Phone Number" required/>
                  <input type="date" {...register("date")} placeholder="Set your order date" required/>
                  <textarea {...register("address")} placeholder="Enter your address" required/>
                  <textarea {...register("description")} placeholder="Your order" required/>
                  <button className="btn btn-primary py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
            </form>
      </div>
      );
};

export default AddOrder;