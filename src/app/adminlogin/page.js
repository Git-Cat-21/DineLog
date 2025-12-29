'use client';

import { passCheck } from './actions';

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF1DC]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          Admin Login
        </h1>

        <form action={passCheck}>
          <div className="mb-6">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full border p-2 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E57373] text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
