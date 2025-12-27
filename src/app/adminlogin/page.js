'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function adminlogin()    {
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if (password==="abc"){
                router.push("/admin")
            }
            else{
                alert("Wrong password redirecting to home page");
                router.push("/")
            }

        }catch(err){
            console.log(err);
        }
    }
    return(


        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF1DC]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md my-8">
                <h1 className="text-2xl font-bold text-center mb-6 text-black">Admin Login</h1>
                
                <form onSubmit={handleSubmit}>
                    
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-[#E57373] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E57373] text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#E57373] text-white py-2 px-4 rounded-md hover:bg-[#E57373]/80 focus:outline-none focus:ring-2 focus:ring-[#E57373] focus:ring-offset-2 transition-colors"
                    >
                        Submit
                    </button>
                </form>

                </div>
                </div>
    )
}