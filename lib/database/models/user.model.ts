import { Schema, model, models } from "mongoose";

const UserSchemas = new Schema({
  clerkId: { type: String, required: true, uniqu: true },
  email: { type: String, required: true, uniqu: true },
  username: { type: String, required: true, uniqu: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

//This line creates a Mongoose model named 'User' based on the defined schema (UserSchemas).
// The models.User checks if a model with the name 'User' already exists.
//If it does, it uses the existing model; otherwise, it creates a new one.
const User = models.User || model("User", UserSchemas);

export default User;
