import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("BorrowingPlatform");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL,
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 
    },
    advanced: {
        crossOrigin: true, // যদি আপনার ফ্রন্টএন্ড এবং ব্যাকএন্ড আলাদা হয়
    },
    trustedOrigins: [
        "https://ph-assignment8.vercel.app",
        "https://ph-assignment8-fqtvfup3g-swarna-saha324s-projects.vercel.app" // আপনার এই প্রিভিউ লিঙ্কটি এখানে দিন
    ]
});