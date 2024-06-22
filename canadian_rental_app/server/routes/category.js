import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

// gets categories
router.get("/", async (req,res) => {
    try{
        let collection = db.collection("CATEGORIES");
        let results = await collection.find({}).toArray();
        

        if(!results || results.length === 0){
            return res.status(404).send("NO Categories Found")
        }

  
        //let categories = results.map(cat => cat.name, cat.items)
        let categories = results.map(cat => cat.name)
        // let categories = results.forEach((_id, name) => results[_id], results[name])
        res.send(categories).status(200)

    }catch(err){
        console.error(err)
        res.status(500).send("An error occurred while fetching the categories")
    }
})

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
// get items for specific category
router.get("/:category", async (req, res) => {
    try {
        const collection = db.collection("CATEGORIES");
       
        const category = await collection.findOne({ name: req.params.category });

        if (!category) {
            return res.status(404).send("Category not found");
        }
        const categoryItems = category.items;
        
        let items = []

        for(let val of categoryItems){
            items.push(await db.collection("ITEMS").find({_id:val}).toArray())
        }

        res.status(200).send(items);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while fetching the category");
    }
})

// get details of specific item
// Item grass cutter _id:666a96195eac1103449edf97

router.get("/:category/:itemId", async (req, res) => {
    try {
        const collection = db.collection("ITEMS");

        const category = req.params.category;
        const itemId = req.params.itemId;

        const item = await collection.findOne({ _id: new ObjectId(itemId) });

        if (!item) {
            return res.status(404).send("Item not found");
        }
        
        res.status(200).send(item);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while fetching the item");
    }
})


// Submit Booking: The booking collection is called and itemid, category, return date, and availability false is sent to the bookings.
router.post("/:category/:itemId/book", async (req, res) => {
    try {
        // The booking collection is called the data containing itemid, categoryName, return date,rentingdays, booked true
        //  is sent to the bookings collection.
        // 

        let newBooking = {
            category:req.body.category,
            itemId:req.body.itemId,
            itemName:req.body.itemName,
            returnDate:req.body.returnDate,
            rentingDays:req.body.rentingDays,
            price:req.body.price
        }
        
        let bookingsCollection = await db.collection('BOOKINGS');
        let result = await bookingsCollection.insertOne(newBooking);
        
        let itemResult = await db.collection('ITEMS').updateOne(
            { _id:new ObjectId(newBooking.itemId)},
            { $set:{ availability: false}}
        );

        res.status(201).send(result)

    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while fetching the item");
    }
})

export default router;