import mongoose, {Schema, model, Document} from "mongoose"

interface product{
    productName:String;
    price:number;
    avatar:string;
    avatarID:string;
    color:string;
    clothTypes:string;
    productDetails:{}[];
}

interface Iproduct extends product,Document{}

const ProductSchema = new Schema({
  productName: {
    type: String,
  },

  price: {
    type: Number,
  },
  avatar: {
    type: String,
  },

  avatarID: {
    type: String,
  },

  color:{
    type:String
  },

   clothTypes:{
    type:String
   },
    productDetails:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId
            }
        ]
    },
},
{
  timestamps:true,
  versionKey:false
},
);

const ProductModel = model<Iproduct>("Products", ProductSchema)

export default ProductModel;