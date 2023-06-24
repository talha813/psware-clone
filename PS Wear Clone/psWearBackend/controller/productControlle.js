import productsSchema from '../model/productsModel.js'
import path from "path"

export const postData=async(req,res)=>
{
    try {
        const products=new productsSchema({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productCategory: req.body.productCategory,
            productColors:req.body.productColors,
            productSize: req.body.productSize
            }
        )
        if (req.files) {
            const pictureData = req.files.map((file) => ({
              data: file.buffer,
              contentType: file.mimetype,
            }));
            products.pictures = pictureData;
          }
        const saved=await products.save();
        res.send(saved);
    } catch (error) 
    {
        res.send(error);
    }
}

export const getData = async (req, res) => {
  try {
    const data = await productsSchema.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

  