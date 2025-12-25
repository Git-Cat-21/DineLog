"use client";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [avgcost, setAvgCost] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("/api/restonames");
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/restonames", {
        name,
        location,
        area,
        description,
        avgcost,
      });

      const response = await axios.get("/api/restonames");
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {items.map((item) => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.area}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
            <p className="mt-2 font-medium">₹{item.avgcost}</p>

            <a
              href={item.location}
              target="_blank"
              className="text-indigo-600 text-sm underline mt-2 inline-block"
            >
              View Location
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-500"
      >
        + Add Restaurant
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕{" "}
            </button>
            <div className="max-w-lg mx-auto p-4">
              <h2>Add Restaurant</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    required
                  ></input>
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Location Link
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    required
                  ></input>
                </div>

                <div>
                  <label className="block text-sm font-medium">Area</label>
                  <input
                    type="text"
                    onChange={(e) => setArea(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    required
                  ></input>
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Description
                  </label>
                  <input
                    type="textarea"
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    required
                  ></input>
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Average Cost
                  </label>
                  <input
                    type="number"
                    onChange={(e) => setAvgCost(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                    required
                  ></input>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-blue-400"
                >
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
