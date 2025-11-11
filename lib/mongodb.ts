import mongoose from 'mongoose';

// Define the connection object type
interface MongooseConnection {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

// Extend the global namespace to include our cached connection
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection | undefined;
}

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

// Initialize the cached connection object
let cached: MongooseConnection = global.mongoose || {
  conn: null,
  promise: null,
};

// Cache the connection globally to prevent multiple connections in development
if (!global.mongoose) {
  global.mongoose = cached;
}

/**
 * Establishes and returns a MongoDB connection using Mongoose
 * Caches the connection to prevent multiple connections during hot reloads in development
 * @returns Promise that resolves to a Mongoose connection
 */
async function dbConnect(): Promise<mongoose.Connection> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Create new connection promise if one doesn't exist
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable buffering to fail fast if no connection
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance.connection;
    });
  }

  try {
    // Wait for the connection promise to resolve
    cached.conn = await cached.promise;
  } catch (e) {
    // Reset promise on error so next call attempts reconnection
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
