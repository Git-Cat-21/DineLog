'use client'
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name,setName] = useState('')
  const [location,setLocation] = useState('')
  const [area, setArea] = useState('')
  const [description,setDescription] = useState('')
  const [avgcost, setAvgCost] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()

    try{
      
      const response = await axios.post("/api/restonames",{name,location,area,description,avgcost})

    } catch(err){
      console.log(err)
    }

  }
  
  return (
  <div className="max-w-lg mx-auto p-4">
    <h2>Add Restaurant</h2>
    <form onSubmit={handleSubmit} className="space-y-4" >
      <div>
      <label className="block text-sm font-medium">Restaurant Name</label>
      <input type="text"
      onChange={(e) => setName(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none" required></input>
      </div>

      <div>
      <label className="block text-sm font-medium">Location Link</label>
      <input type="text" 
      onChange={(e) => setLocation(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none" required></input>
      </div>

      <div>
      <label className="block text-sm font-medium">Area</label>
      <input type="text" 
      onChange={(e) => setArea(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none" required></input>
      </div>

      <div>
      <label className="block text-sm font-medium">Description</label>
      <input type="textarea" 
      onChange={(e) => setDescription(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none" required></input>
      </div>

      <div>
      <label className="block text-sm font-medium">Average Cost</label>
      <input type="number" 
      onChange={(e) => setAvgCost(e.target.value)}
      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none" required></input>
      </div>

      <button type="submit"
      className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-blue-400"> Submit</button>

    </form>
  </div>
  );
}
