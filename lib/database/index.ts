import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://vermanaweli07:123123123@cluster0.9pg32eg.mongodb.net/event?retryWrites=true&w=majority";

//cached var initialization,global hoold cached connection
let cached = (global as any).mongoose || { conn: null, proname: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "event",
      bufferCommands: false,
    });

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }

  return { connection: cached.conn, status: "Server is running" };
};
