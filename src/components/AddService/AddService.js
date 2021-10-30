import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
            console.log(data);
            axios.post('http://localhost:5000/services', data)
            .then(res => {
                  console.log(res);
                  if(res.data.insertedId){
                        alert('Successfully Added');
                        reset();
                  }
            })
      }
      return (
            <div className="add__service">
            <h2 className="text-info p-3 mt-5">Add Catering Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <input  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required/>
                  <textarea {...register("description")} placeholder="Description" required/>
                  {/* <input type="number" {...register("price")} placeholder="Price" required/> */}
                  <input {...register("img")} placeholder="Image url" required/>
                  <button className="btn btn-primary py-2 px-4 mt-2 mb-5" type="submit">Submit</button>
            </form>
      </div>
      );
};

export default AddService;