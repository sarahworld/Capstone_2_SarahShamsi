import express from "express";
import cors from "cors";



const app = express();
const PORT = process.env.PORT || 5050;
import categories from "./routes/category.js"

app.use(cors());
app.use(express.json());
app.use("/", categories);

// app.get('/', (req,res) => {
//   // TODO: get categories from db
//   res.send("Hello World!")
// })


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});