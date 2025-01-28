import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./mongo";

config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
    await connectToDatabase(MONGO_URI);

    console.log(`Server is running on port ${PORT}`);
});
