import connectionToDatabase from "../../../../../lib/mongoose";
import RestoNames from "../../../../../models/Restoname";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await connectionToDatabase();

    const body = await request.json();
    const { id } = await params;   

    const updated = await RestoNames.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    return NextResponse.json(updated, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, {params}) {
  try{
    await connectionToDatabase();
    const {id} = await params;

    await RestoNames.findByIdAndDelete(id);
    return NextResponse.json({ success: true },{status: 200});
  }catch(error){
    return NextResponse.json({error: error.message },
      {status:500}
    );
  }
  
}