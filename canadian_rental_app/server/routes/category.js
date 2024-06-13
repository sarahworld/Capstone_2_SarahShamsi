import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

console.log("In cats")

// gets categories
router.get("/", async (req,res) => {
    try{
        let collection = db.collection("CATEGORIES");
        let results = await collection.find({}).toArray();
        console.log(results)

        if(!results || results.length === 0){
            return res.status(404).send("NO Categories Found")
        }
        let categories = results.map(cat => cat.name)
        res.send(categories).status(200)

    }catch(err){
        console.error(err)
        res.status(500).send("An error occurred while fetching the categories")
    }
})

// get items for specific category
router.get("/:name", async (req, res) => {
    try {
        const collection = db.collection("CATEGORIES");
        const category = await collection.findOne({ name: req.params.name });

        if (!category) {
            return res.status(404).send("Category not found");
        }
        const items = category.items;
        res.status(200).send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while fetching the category");
    }
})

// get details of specific post



// create booking


// create item post


// login and authentication
export default router;