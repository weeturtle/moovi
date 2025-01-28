import mongoose, { ConnectOptions } from "mongoose";

mongoose.Promise = global.Promise;

const connectToDatabase = async (MONGO_URI: string): Promise<void> => {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    }

    const options: ConnectOptions = { autoIndex: true };

    await mongoose.connect(MONGO_URI, options);
};

export { connectToDatabase };
