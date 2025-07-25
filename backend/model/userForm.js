import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, trim: true },
  password: { type: String, trim: true },
  address: { type: String, trim: true },
  address1: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zip: { type: Number },
});

const UserPostMOdel = mongoose.model("UserPost", userSchema);

export default UserPostMOdel;
