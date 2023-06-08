import User from "@/models/User";
import Joi from "joi";
import { NextResponse } from "next/server";
import { hash } from 'bcryptjs';
import connectDB from "@/db/connectDB";


const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


export async function POST(req: Request) {
    console.log('got hit ')
    await connectDB();



    const { email, password, name } = await req.json();
    const { error } = schema.validate({ email, password, name });

    if (error) return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    try {
        const ifExist = await User.findOne({ email });

        if (ifExist) {
            return NextResponse.json({ success: false, message: "User Already Exist" });
        }

        else {
            const hashedPassword = await hash(password, 12)
            const createUser = await User.create({ email, name, password: hashedPassword });
            if (createUser) return NextResponse.json({ success: true, message: "Account created successfully" });
        }
    } catch (error) {
        console.log('Error in register (server) => ', error);
        return NextResponse.json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}