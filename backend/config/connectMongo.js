import mongoose from "mongoose";
import { MONGODB_URL, MONGODB_URL_FALLBACK } from "./env.js";

export const connectDB = async () => {
  try {
    if (!MONGODB_URL) {
      throw new Error("MONGODB_URL is missing in environment variables");
    }

    await mongoose.connect(MONGODB_URL);
    console.log("Mongo DB connected");
  } catch (error) {
    const isSrvDnsFailure =
      error?.code === "ECONNREFUSED" && error?.syscall === "querySrv";

    if (isSrvDnsFailure && MONGODB_URL_FALLBACK) {
      try {
        console.log(
          "SRV DNS lookup failed. Retrying with MONGODB_URL_FALLBACK...",
        );
        await mongoose.connect(MONGODB_URL_FALLBACK);
        console.log("Mongo DB connected (fallback URI)");
        return;
      } catch (fallbackError) {
        console.error("Mongo DB fallback connection failed:", fallbackError);
      }
    }

    console.error("Mongo DB connection failed:", error);
    process.exit(1);
  }
};