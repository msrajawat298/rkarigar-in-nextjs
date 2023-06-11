import connectDB from "@/db/connectDB";
import ServiceCategory from "@/models/ServiceCategory";
import { NextResponse } from "next/server";
import Joi from "joi";
import AuthCheck from "@/middleware/authCheck";

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required()
})


export async function POST(req: Request) {
    try {
        await connectDB();

        const isAuthenticated = await AuthCheck(req);

        if (isAuthenticated === 'admin') {

            const data = await req.json();

            const { name, description, image } = data;

            const { error } = schema.validate({ name, description, image });

            if (error) return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

            const saveData = await ServiceCategory.create(data);

            if (saveData) {

                return NextResponse.json({ success: true, message: "Category added successfully!" });

            } else {

                return NextResponse.json({ success: false, message: "Failed to add the category. Please try again!" });
                
            }
        } else {

            return NextResponse.json({ success: false, message: "You are not authorized." });
            
        }





    } catch (error) {
        console.log('Error while adding service category API (server)' + error);
        return NextResponse.json({ success: false, message: 'Something went wrong Please Try Again !' });
    }
}