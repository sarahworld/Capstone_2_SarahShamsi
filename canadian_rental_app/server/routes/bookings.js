import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();


//Get list of bookings
router.get("/bookings", async (req, res) => {

    try{
        const bookings = await db.collection("BOOKINGS").find({}).toArray();

        res.status(200).send(bookings)
    }catch(err){
        console.error(err);
        res.status(500).send("An error occurred while fetching the bookings")
    }
    
});

export default router;