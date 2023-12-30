import { Schema, model, models, Document } from "mongoose";

//Document is an instance of a model created using Mongoose.
//A Mongoose model represents a MongoDB collection and provides an interface for interacting with the documents in that collection.
export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  imageurl: string;
  createdAt: Date;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category?: { _id: string; name: string }; // Assuming your Category model uses Types.ObjectId
  organizer?: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageurl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  startDateTime: { type: Date, default: Date.now() },
  endDateTime: { type: Date, default: Date.now() },
  price: { type: String },
  isFree: { type: Boolean, defaukt: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "Organizer" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
