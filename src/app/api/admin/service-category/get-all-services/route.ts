import connectDB from "@/db/connectDB";
import ServiceCategory from "@/models/ServiceCategory";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const data  =  await ServiceCategory.find({});
        if(data){
            return NextResponse.json({success:true,data:data});
        }else{
            return NextResponse.json({success:false,message:"Something went wrong !"});
        }
    } catch (error) {
        console.log('Error while getting all service category API (server)' + error);
        return NextResponse.json({ success: false, message: 'Something went wrong Please Try Again !' });
    }
}
