// Importing mongoose library along with Connection type from it
import mongoose, { Connection } from "mongoose";

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

// Function to establish a connection to MongoDB
 async function connectDB() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const { connection } = await mongoose.connect(process.env.MONGO_URI!);
    if (connection.readyState === 1) {
      // Cache the connection for future use
      cachedConnection = connection;
      // Log message indicating a new MongoDB connection is established
      console.log("New mongodb connection established");
      // Return the newly established connection
      return cachedConnection;
    }
  } catch (error) {
    // If an error occurs during connection, log the error and throw it

    console.error(error);
    // throw error;
    return Promise.reject(error);
  }
}
export default connectDB;