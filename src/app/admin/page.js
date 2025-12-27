'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Admin() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get("/api/restonames");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/restonames/${editingItem._id}`, editingItem);
      setOpen(false);
      setEditingItem(null);
      fetchRestaurants();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="font-bold text-center text-5xl text-indigo-500 px-10 py-5">
        Admin Page
      </div>

      <Link
        href="/"
        className="fixed top-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-500"
      >
        Home
      </Link>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg p-4 hover:bg-stone-100"
          >
            <div className="relative w-full h-48 mb-3">
              <Image
                src={item.imageUrl}
                alt="restaurant image"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.area}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
            <p className="mt-2 font-medium">Avg Cost: ₹{item.avgcost}</p>

            <a
              href={item.location}
              target="_blank"
              className="text-indigo-600 text-sm underline mt-2 inline-block"
            >
              View Location
            </a>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setEditingItem(item);
                  setOpen(true);
                }}
                className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-400"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && editingItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Edit Restaurant</h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                value={editingItem.name}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, name: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
              />

              <input
                type="text"
                value={editingItem.location}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, location: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
              />

              <input
                type="text"
                value={editingItem.area}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, area: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
              />

              <textarea
                value={editingItem.description}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, description: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
                rows="4"
              />

              <input
                type="number"
                value={editingItem.avgcost}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, avgcost: e.target.value })
                }
                className="w-full border px-3 py-2 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}