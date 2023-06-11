import mongoose from "mongoose";

const ServiceCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    image: String,
});

const ServiceCategory =  mongoose.models.ServiceCategory || mongoose.model("ServiceCategory", ServiceCategorySchema);

export default ServiceCategory;