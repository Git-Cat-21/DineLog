import connectionToDatabase from "../../../../lib/mongoose";
import RestoNames from "../../../../models/Restoname";
import {NextResponse} from "next/server";

export async function POST(request) {
    try {
        await connectionToDatabase();
        const { name, location, area, description, avgcost } = await request.json();
        const newResto = new RestoNames({ name, location, area, description, avgcost });
        await newResto.save();
        return NextResponse.json(newResto, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function GET(request){
    try{
        await connectionToDatabase();
        const restodata=await RestoNames.find();
        return NextResponse.json(restodata,{status:200})
    } catch (error){
        console.error(error);
        return NextResponse.json({error: error.message},{status: 500});
    }
}