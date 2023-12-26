import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

//cached var initialization,global hoold cached connection
let cached = (global as any).mongoose || { conn: null, proname: null };

export const connnectDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;

  return cached.com;
};
