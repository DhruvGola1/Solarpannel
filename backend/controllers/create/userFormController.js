import mongoose from "mongoose";
import bcrypt from "bcrypt";
import UserPostMOdel from "../../model/userForm.js";

const userController = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    address1,
    city,
    state,
    zip,
  } = req.body;
  console.log(req.body);
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  try {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !address ||
      !city ||
      !state ||
      !zip
    ) {
      res.json({ status: "Failed", message: "All Field Are required" });
      return;
    }
    if (!gmailRegex.test(email)) {
      res.json({ status: "Failed", message: "Email should have @gmail.com" });
      return;
    }
    const emailCheck = await UserPostMOdel.findOne({ email });
    if (emailCheck) {
      res.json({ status: "Failed", message: "Email Already Exist" });
      return;
    }
    if (password.length <= 6) {
      res.json({
        status: "Failed",
        message: "Password Length should greater than 6",
      });
      return;
    }
    const salt = await bcrypt.genSalt(10);

    const hashPashword = await bcrypt.hash(password, salt);
    console.log(hashPashword);
    const saveData = new UserPostMOdel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPashword,
      address: address,
      address1: address1,
      city: city,
      state: state,
      zip: zip,
    });
    await saveData.save();
    res.json({ status: "success", message: "User Create Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export default userController;
