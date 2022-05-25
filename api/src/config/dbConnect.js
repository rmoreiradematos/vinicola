import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rodrigo:rodrigo@alura.rb9pwod.mongodb.net/alura");


let db = mongoose.connection;

export default db;