// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const client = new MongoClient(process.env.ATLAS_URI);

mongoose.connect(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

const db = mongoose.Connection

// let db = conn.db("sample_training");

export default db;
