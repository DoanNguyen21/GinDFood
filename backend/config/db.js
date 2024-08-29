import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gindisme21:30012001@cluster0.5usi4.mongodb.net/GinDFood"
    )
    .then(() => console.log("DB Connected"));
};
