"use server"
import { redirect } from 'next/navigation';

export async function passCheck(formData){

    const password=formData.get("password");

    if (password==process.env.ADMIN_PASSWORD){
        redirect("/admin");
    }else{
        redirect("/");
    }

}