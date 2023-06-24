import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  productColors: {
    type: String,
    required: true,
  },
  pictures: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
},
{ timestamps: true }
);

export default mongoose.model("products", productSchema);
