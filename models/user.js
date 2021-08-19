import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    last_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 255,
    },
    phone_number: {
      type: Number,
      minlength: 10,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
