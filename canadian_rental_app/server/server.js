import express from "express";
import cors from "cors";

import categories from "./routes/category.js";
import bookings from "./routes/bookings.js";


const app = express();
const PORT = process.env.PORT || 5050;


app.use(cors());
app.use(express.json());

app.use("/", categories);
// app.use("/bookings", bookings);


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});